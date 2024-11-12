import React, { useState } from 'react';
import { Task, Priority, Status } from '@/types/Task';
import AssigneeSelect from './AssigneeSelect';
import PrioritySelect from './PrioritySelect';
import { Calendar, ClipboardList, Clock, User, Tag } from 'lucide-react';

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

  const [newTag, setNewTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      status: 'todo' as Status,
      createdById: 'current-user-id',
      dueDate: new Date(formData.dueDate),
    });
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()],
      });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Task</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          {/* Title Input */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <ClipboardList className="w-4 h-4 mr-2" />
              Task Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter task title"
            />
          </div>

          {/* Description Input */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <ClipboardList className="w-4 h-4 mr-2" />
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[100px]"
              placeholder="Enter task description"
            />
          </div>

          {/* Due Date and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Calendar className="w-4 h-4 mr-2" />
                Due Date
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="relative">
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Clock className="w-4 h-4 mr-2" />
                Priority
              </label>
              <PrioritySelect
                value={formData.priority}
                onChange={(priority) => setFormData({ ...formData, priority })}
              />
            </div>
          </div>

          {/* Assignee */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <User className="w-4 h-4 mr-2" />
              Assignee
            </label>
            <AssigneeSelect
              value={formData.assigneeId}
              onChange={(assigneeId) => setFormData({ ...formData, assigneeId })}
            />
          </div>

          {/* Tags Input */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Tag className="w-4 h-4 mr-2" />
              Tags
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Add tags"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Add
              </button>
            </div>
            
            {/* Tags Display */}
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;