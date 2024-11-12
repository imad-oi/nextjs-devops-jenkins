import React from 'react';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  if (count === 0) return null;

  return (
    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
      {count > 99 ? '99+' : count}
    </span>
  );
};

export default NotificationBadge;
