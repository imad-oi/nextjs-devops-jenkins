import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { TaskProvider } from '@/context/TaskContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Management App',
  description: 'A simple task management application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          <div className="min-h-screen bg-gray-100">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </TaskProvider>
      </body>
    </html>
  )
}