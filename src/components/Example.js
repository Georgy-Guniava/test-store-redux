import {NotificationManager} from 'react-notifications';

export function createNotification(object) {
    return () => {
        switch (object.type) {
            case 'info':
                NotificationManager.info(object.message, object.title);
                break;
            case 'success':
                NotificationManager.success(object.message, object.title);
                break;
            case 'warning':
                NotificationManager.warning(object.message, object.title, 3000);
                break;
            case 'error':
                NotificationManager.error(object.message, object.title, 5000);
                break;

            default:
                return 0
        }
    };
}


// https://www.npmjs.com/package/react-notifications