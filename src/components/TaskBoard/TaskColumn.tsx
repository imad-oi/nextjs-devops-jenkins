import React from 'react';
import { Task, Status } from '@/types/Task';
import TaskCard from './TaskCard';

interface TaskColumnProps {
  title: string;
  status: Status;
  tasks: Task[];
  onDrop: (taskId: string, status: Status) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, status, tasks, onDrop }) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    const taskId = e.dataTransfer.getData('taskId');
    onDrop(taskId, status);
  };

  return (
    <div
      className="flex flex-col w-80 bg-gray-100 rounded-lg p-4"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
