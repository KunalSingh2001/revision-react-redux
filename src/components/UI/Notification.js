import classes from './Notification.module.css';

const Notification = ({ status, message }) => {
  if (!status) return null; // hide if no status

  let statusClasses = '';
  if (status === 'success') {
    statusClasses = classes.success;
  } else if (status === 'error') {
    statusClasses = classes.error;
  } else if (status === 'pending') {
    statusClasses = classes.pending;
  }

  return <div className={`${classes.notification} ${statusClasses}`}>{message}</div>;
};

export default Notification;
