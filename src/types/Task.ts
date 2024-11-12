export type Priority = 'low' | 'medium' | 'high' | 'urgent';
export type Status = 'todo' | 'in_progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  dueDate: Date;
  priority: Priority;
  status: Status;
  assigneeId: string;
  createdById: string;
  tags: string[];
}
