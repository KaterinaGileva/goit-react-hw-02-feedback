import css from 'components/Section/Notification/Notification.module.css';

export const Notification = ({message}) => {
    return (
      <div className={css.notification}>{message}</div>
    );
   };
  
   export default Notification;