import React from 'react';
import { Task } from '@/types/Task';

interface TaskMetricsProps {
  tasks: Task[];
}

const TaskMetrics: React.FC<TaskMetricsProps> = ({ tasks }) => {
  const getTotalsByStatus = () => {
    return tasks.reduce(
      (acc, task) => {
        acc[task.status]++;
        return acc;
      },
      { todo: 0, in_progress: 0, done: 0 }
    );
  };

  const totals = getTotalsByStatus();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-900">To Do</h3>
        <p className="mt-2 text-3xl font-bold text-indigo-600">{totals.todo}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-900">In Progress</h3>
        <p className="mt-2 text-3xl font-bold text-yellow-600">{totals.in_progress}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-900">Done</h3>
        <p className="mt-2 text-3xl font-bold text-green-600">{totals.done}</p>
      </div>
    </div>
  );
};

export default TaskMetrics;
