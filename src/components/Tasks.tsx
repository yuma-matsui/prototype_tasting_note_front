import { FC, useCallback, useEffect, useState } from 'react'

import client from '../lib/api/client'
import TaskAPI from '../types/api/taskAPI'
import Task from '../types/task'
import TaskItem from './TaskItem'

const Tasks: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = useCallback(async () => {
    const result = (await client.get<TaskAPI[]>('/tasks')).data.map(({ id, title }) => ({
      id,
      title,
    }))
    setTasks(result)
  }, [])

  useEffect(() => {
    fetchTasks().catch((e) => {
      if (e instanceof Error) console.error(e.message)
    })
  }, [fetchTasks])

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks
