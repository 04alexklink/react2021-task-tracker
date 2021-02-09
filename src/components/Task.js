import { FaTimes } from 'react-icons/fa';

const Task = ( { task, onDelete } ) => {
    return (
        <div className='task'>
            <h3 key={task.id}>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;