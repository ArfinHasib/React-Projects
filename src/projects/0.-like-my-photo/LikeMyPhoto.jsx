import React, { useState } from 'react';
import Title from '../components/Title';

import {
   AiFillSmile,
   AiFillHeart,
   AiOutlineHeart,
   AiOutlineComment,
} from 'react-icons/ai';

import Doggy from './img/dog.jpg';

function LikeMyPhoto() {
   const [like, setLike] = useState(false);
   const [count, setCount] = useState(0);

   const toggleLike = () => {
      if (!like) {
         setLike(true);
         setCount(count + 1);
      } else {
         setLike(false);
         setCount(count - 1);
      }
   };

   return (
      <div className='container text-center' style={{ height: '100vh' }}>
         <Title text='Like Photo App' />
         <Title classes='sub-title mb-2' text={`Likes ${count}`} />
         <div
            className='card card-dark m-auto shadow-sm'
            style={{
               width: 300,
               cursor: 'pointer',
            }}
         >
            <div className='card-header fs-xl'>
               <AiFillSmile className='mr-2' />
               <small className=''>DodgyDog</small>
            </div>
            <img
               src={Doggy}
               alt='img'
               style={{ height: 'fit-content' }}
               onDoubleClick={toggleLike}
            />

            <div
               className='card-footer fs-xl d-flex'
               style={{ justifyContent: 'space-between' }}
            >
               <AiOutlineComment />{' '}
               {like ? (
                  <AiFillHeart className='text-danger' onClick={toggleLike} />
               ) : (
                  <AiOutlineHeart onClick={toggleLike} />
               )}
            </div>
         </div>
      </div>
   );
}

export default LikeMyPhoto;
