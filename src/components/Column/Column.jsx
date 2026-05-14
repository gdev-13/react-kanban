import './Column.css'
import { FaTrash, FaEdit } from 'react-icons/fa'

function Column({ title, tasks, moveTask, deleteTask, editTask }) {
    return (
        <div className="column">
            <h2>{title}</h2>

            {tasks.map(task => (
                <div className="task-card" key={task.id}>
                    <p>{task.title}</p>
                    <div className='task-buttons'>
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
                        <div className="task-icons">
                            <button onClick={() => editTask(task.id)}>
                                <FaEdit />
                            </button>

                            <button onClick={() => deleteTask(task.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Column