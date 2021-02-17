import PropTypes from 'prop-types';
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = ({title, showAddTaskForm, showAddTaskValue}) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1> {title}</h1>
      {location.pathname === '/' && <Button color= {showAddTaskValue ? 'red' : 'green'} text = {showAddTaskValue ? 'Close' : 'Add'} onClick={showAddTaskForm} />}
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;