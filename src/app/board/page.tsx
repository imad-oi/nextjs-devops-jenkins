'use client';

import React from 'react';
import TaskColumn from '@/components/TaskBoard/TaskColumn';
import { useTask } from '@/context/TaskContext';
import { Status } from '@/types/Task';

export default function BoardPage() {
  const { tasks, updateTaskStatus } = useTask();

  const getTasksByStatus = (status: Status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Task Board</h1>
      <div className="flex space-x-6 overflow-x-auto pb-4">
        <TaskColumn
          title="To Do"
          status="todo"
          tasks={getTasksByStatus('todo')}
          onDrop={updateTaskStatus}
        />
        <TaskColumn
          title="In Progress"
          status="in_progress"
          tasks={getTasksByStatus('in_progress')}
          onDrop={updateTaskStatus}
        />
        <TaskColumn
          title="Done"
          status="done"
          tasks={getTasksByStatus('done')}
          onDrop={updateTaskStatus}
        />
      </div>
    </div>
  );
}
