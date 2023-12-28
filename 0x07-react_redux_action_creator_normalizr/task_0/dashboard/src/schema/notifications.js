import * as data from './notifications.json';

export function getAllNotificationsByUser(userId) {
  return data.filter(notification => notification.author.id === userId);
}
