import React, { useState } from 'react';
import { Task, Priority, Status } from '@/types/Task';
import AssigneeSelect from './AssigneeSelect';
import PrioritySelect from './PrioritySelect';

interface CreateTaskFormProps {
  onSubmit: (task: Omit<Task, 'id' | 'createdAt'>) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium' as Priority,
    assigneeId: '',
    tags: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      status: 'todo' as Status,
      createdById: 'current-user-id', // To be replaced with actual user id
      dueDate: new Date(formData.dueDate),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <PrioritySelect
          value={formData.priority}
          onChange={(priority) => setFormData({ ...formData, priority })}
        />
      </div>

      <AssigneeSelect
        value={formData.assigneeId}
        onChange={(assigneeId) => setFormData({ ...formData, assigneeId })}
      />

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Task
      </button>
    </form>
  );
};

export default CreateTaskForm;
