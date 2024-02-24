import React, { useState, useRef, useEffect } from 'react';
import Title from '../components/Title';
import FormGroup from '../components/FormGroup';
import { Wrapper } from './components/wrapper.style';
import { AuthContext } from './context/auth-context';
import Auth from './components/Auth';

export default function AuthApp() {
   // Autofocus
   const inputName = useRef(null);
   useEffect(() => {
      inputName.current.focus();
   }, [inputName]);

   const [ui, setUi] = useState({
      wrapper: true,
      title: 'Authenticate',
   });

   const [animateDenied, setAnimateDenied] = useState(false);
   const [authStatus, setAuthStatus] = useState(null);

   // control name and password
   const [userAuth, setUserAuth] = useState({
      name: '',
      password: '',
   });

   const handleChangeName = (e) => {
      setUserAuth({ ...userAuth, name: e.target.value });
   };

   const handleChangePassword = (e) => {
      setUserAuth({ ...userAuth, password: e.target.value });
   };

   const login = () => {
      if (userAuth.name === 'Norbert' && userAuth.password === '1234') {
         setAuthStatus(true);
         clearInputs();
         authenticate();
      }
   };

   const clearInputs = () => {
      setUserAuth({
         name: '',
         password: '',
      });
   };

   const authenticate = () => {
      setUi({ wrapper: false, title: `Welcome ${userAuth.name}` });
   };

   return (
      <div className='container' style={{ width: 300 }}>
         <Title text={ui.title} />
         <AuthContext.Provider
            value={{ status: authStatus, login: login, logout: logout }}
         >
            {ui.wrapper && (
               <Wrapper className={animateDenied && 'active'}>
                  <FormGroup
                     labelText={'User name'}
                     inputType='text'
                     placeholder={'Enter your name'}
                     reference={inputName}
                     values={userAuth.name}
                     onChange={handleChangeName}
                  />
                  <FormGroup
                     labelText='Password'
                     inputType='password'
                     placeholder='Enter your password'
                     values={userAuth.password}
                     onChange={handleChangePassword}
                  />
               </Wrapper>
            )}
         </AuthContext.Provider>
         <Auth />
      </div>
   );
}
