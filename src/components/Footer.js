import { Link, useLocation} from 'react-router-dom'
 const Footer = () => {
   const location = useLocation()
  return (
      <footer className="footer">
          {location.pathname === '/about'? '' :<Link to='/about'>About</Link>}
      </footer>
  )
}

export default Footer