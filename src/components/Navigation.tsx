'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NotificationBadge from './Notifications/NotificationBadge'

const Navigation = () => {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Task Board', href: '/board' },
    { name: 'Create Task', href: '/create-task' },
    { name: 'Notifications', href: '/notifications' },
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium ${
                  pathname === item.href
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
  )
}

export default Navigation
