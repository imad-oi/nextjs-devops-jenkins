import { Priority } from '@/types/Task';

export const getPriorityLabel = (priority: Priority): string => {
  const labels = {
    low: 'Low Priority',
    medium: 'Medium Priority',
    high: 'High Priority',
    urgent: 'Urgent Priority'
  };
  return labels[priority];
};

export const getPriorityColor = (priority: Priority): string => {
  const colors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-orange-100 text-orange-800',
    urgent: 'bg-red-100 text-red-800'
  };
  return colors[priority];
};
