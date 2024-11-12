'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CreateTaskForm from '@/components/TaskForm/CreateTaskForm';
import { useTask } from '@/context/TaskContext';
import type { Task } from '@/types/Task';

export default function CreateTaskPage() {
  const router = useRouter();
  const { addTask } = useTask();

  const handleSubmit = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    addTask(taskData);
    router.push('/board');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Task</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <CreateTaskForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
