import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NotificationBadge from './Notifications/NotificationBadge';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  
  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Task Board', href: '/board' },
    { name: 'Create Task', href: '/create-task' },
    { name: 'Notifications', href: '/notifications' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium ${
                    router.pathname === item.href
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                  {item.name === 'Notifications' && <NotificationBadge count={3} />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
