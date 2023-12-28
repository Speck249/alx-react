import { normalized } from './notifications';

function getAllNotificationsByUser(userId) {
  const { entities, result } = normalized;

  const userNotifications = entities.notifications;
  const userMessages = entities.messages;
  const user = entities.users[userId];

  if (!user || !userNotifications || !userMessages) {
    return [];
  }

  const notifications = result.reduce((acc, notificationId) => {
    const notification = userNotifications[notificationId];

    if (notification.author === userId) {
      const message = userMessages[notification.context];

      if (message) {
        acc.push({
          guid: message.guid,
          isRead: notification.isRead,
          type: notification.type,
          value: message.value
        });
      }
    }

    return acc;
  }, []);

  return notifications;
}

export default getAllNotificationsByUser;
