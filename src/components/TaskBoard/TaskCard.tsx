import React from 'react';
import { Task } from '@/types/Task';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  const getPriorityColor = (priority: Task['priority']) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      urgent: 'bg-red-100 text-red-800',
    };
    return colors[priority];
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <h4 className="font-medium mb-2">{task.title}</h4>
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      <div className="flex justify-between items-center">
        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        <span className="text-xs text-gray-500">
          {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
