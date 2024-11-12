import { Priority } from '@/types/Task';
import { getPriorityLabel } from '@/utils/priorityHelpers';
import React from 'react';

interface PrioritySelectProps {
  value: Priority;
  onChange: (value: Priority) => void;
}

const PrioritySelect: React.FC<PrioritySelectProps> = ({ value, onChange }) => {
  const priorities: Priority[] = ['low', 'medium', 'high', 'urgent'];

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Priority</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Priority)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        {priorities.map((priority) => (
          <option key={priority} value={priority}>
            {getPriorityLabel(priority)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PrioritySelect;
