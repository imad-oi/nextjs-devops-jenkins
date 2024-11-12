'use client'

import React, { createContext, useContext, useState } from 'react';
import { Task, Status } from '@/types/Task';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTaskStatus: (taskId: string, status: Status) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId: string, status: Status) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, status } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};
