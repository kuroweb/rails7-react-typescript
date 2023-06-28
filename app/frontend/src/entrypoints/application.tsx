import { createRoot } from 'react-dom/client'
import App from '../App'

// TasksController #index
document.addEventListener('DOMContentLoaded', async () => {
  const element = document.getElementById('tasks_index') || undefined
  if (element != undefined) {
    const TasksIndex = (await import('../features/tasks/Index')).default

    createRoot(element).render(
      <App>
        <TasksIndex {...element?.dataset} />
      </App>,
    )
  }
})
