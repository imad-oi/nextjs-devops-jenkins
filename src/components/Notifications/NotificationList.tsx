import React from 'react';
import { Notification } from '@/types/Notification';

interface NotificationListProps {
  notifications: Notification[];
  onMarkAsRead: (notificationId: string) => void;
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications, onMarkAsRead }) => {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg border ${
            notification.read ? 'bg-gray-50' : 'bg-white border-indigo-100'
          }`}
        >
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-900">{notification.message}</p>
            {!notification.read && (
              <button
                onClick={() => onMarkAsRead(notification.id)}
                className="text-xs text-indigo-600 hover:text-indigo-800"
              >
                Mark as read
              </button>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(notification.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
