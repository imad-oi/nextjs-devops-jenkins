'use client'

import React from 'react';
import NotificationList from '@/components/Notifications/NotificationList';
import { Notification } from '@/types/Notification';

export default function Notifications() {
  const [notifications, setNotifications] = React.useState<Notification[]>([]);

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === notificationId 
        ? { ...notification, read: true }
        : notification
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Notifications</h1>
      <NotificationList 
        notifications={notifications}
        onMarkAsRead={handleMarkAsRead}
      />
    </div>
  );
}