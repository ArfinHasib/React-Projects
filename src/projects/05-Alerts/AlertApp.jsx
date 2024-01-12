import Alert from '../components/Alert';

export default function AlertApp() {
   return (
      <div className='container mx-auto'>
         <Alert type='success' message='Successfuls Login' />
         <Alert
            type='info'
            message='Time Triggered'
            delay={true}
            delayTime={1000}
         />
      </div>
   );
}
