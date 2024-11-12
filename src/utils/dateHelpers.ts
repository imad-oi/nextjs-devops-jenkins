export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};

export const isOverdue = (dueDate: Date): boolean => {
  return new Date(dueDate) < new Date();
};

export const getDaysUntilDue = (dueDate: Date): number => {
  const diff = new Date(dueDate).getTime() - new Date().getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
