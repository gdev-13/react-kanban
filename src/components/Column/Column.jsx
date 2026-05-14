import './Column.css'

function Column({ title, tasks, moveTask }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      {tasks.map(task => (
        <div className="task-card" key={task.id}>
          <p>{task.title}</p>

          <div className="task-actions">
            <button onClick={() => moveTask(task.id, 'todo')}>
              To Do
            </button>

            <button onClick={() => moveTask(task.id, 'doing')}>
              Doing
            </button>

            <button onClick={() => moveTask(task.id, 'done')}>
              Done
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Column