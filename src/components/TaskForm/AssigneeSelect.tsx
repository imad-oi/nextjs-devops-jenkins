import React from 'react';
import { TeamMember } from '@/types/Team';

interface AssigneeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const MOCK_TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'member' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'member' },
  { id: '3', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
];

const AssigneeSelect: React.FC<AssigneeSelectProps> = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Assignee</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="">Select an assignee</option>
        {MOCK_TEAM_MEMBERS.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AssigneeSelect;
