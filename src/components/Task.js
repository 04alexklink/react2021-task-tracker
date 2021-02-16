import { FaTimes } from 'react-icons/fa';

const Task = ( { task, onDelete, onToggleReminder } ) => {
    return (
        <div className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => onToggleReminder(task.id)}>
            <h3 key={task.id}>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;