import PropTypes from 'prop-types';
import Button from './Button'
const Header = ({title, showAddForm}) => {
  const onClick = () => {
      console.log('Click');
  }
  return (
    <header className='header'>
      <h1> {title}</h1>
      <Button color= 'green' text = 'Close' onClick = {onClick} showAddForm={showAddForm} />
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