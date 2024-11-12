export interface Notification {
  id: string;
  type: 'task_assigned' | 'task_updated' | 'deadline_approaching' | 'task_completed';
  taskId: string;
  userId: string;
  message: string;
  createdAt: Date;
  read: boolean;
}
