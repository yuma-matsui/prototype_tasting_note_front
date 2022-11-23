import { FC } from 'react'
import Task from '../types/task'

type Props = {
  task: Task
}

const TaskItem: FC<Props> = ({ task: { id, title } }) => (
  <p>
    <span>{id}</span>: {title}
  </p>
)

export default TaskItem
