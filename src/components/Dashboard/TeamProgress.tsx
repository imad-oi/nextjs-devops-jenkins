import React from 'react';
import { Task } from '@/types/Task';
import { TeamMember } from '@/types/Team';

interface TeamProgressProps {
  tasks: Task[];
  teamMembers: TeamMember[];
}

const TeamProgress: React.FC<TeamProgressProps> = ({ tasks, teamMembers }) => {
  const getTasksByMember = (memberId: string) => {
    const memberTasks = tasks.filter(task => task.assigneeId === memberId);
    return {
      total: memberTasks.length,
      completed: memberTasks.filter(task => task.status === 'done').length
    };
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Team Progress</h3>
      <div className="space-y-4">
        {teamMembers.map(member => {
          const stats = getTasksByMember(member.id);
          const progressPercentage = stats.total ? (stats.completed / stats.total) * 100 : 0;
          
          return (
            <div key={member.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{member.name}</span>
                <span className="text-sm text-gray-500">
                  {stats.completed}/{stats.total} tasks
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamProgress;
