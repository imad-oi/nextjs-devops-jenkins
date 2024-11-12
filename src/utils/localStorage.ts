const STORAGE_KEY = 'task-management-app';

interface StorageData {
  tasks: any[];
  notifications: any[];
}

export const loadFromStorage = (): StorageData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { tasks: [], notifications: [] };
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return { tasks: [], notifications: [] };
  }
};

export const saveToStorage = (data: StorageData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};
