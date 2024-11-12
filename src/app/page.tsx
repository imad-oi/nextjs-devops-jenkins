"use client"

import TaskMetrics from '@/components/Dashboard/TaskMetrics'
import { useTask } from '@/context/TaskContext'

export default function Home() {
  const { tasks } = useTask()

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <TaskMetrics tasks={tasks} />
    </>
  )
}
