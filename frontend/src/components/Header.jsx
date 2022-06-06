import {FaSignInAlt, FaSignOutAlt, FaUser, FaTachometerAlt, FaSearch } from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch, Provider} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'





function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
      <Provider>
    <header className='header'>
    <div className="logo">
        <Link to='/'>SneakerFinder</Link>
    </div>
    <ul>
        <li>
          <Link to='/search'>
            <FaSearch /> Search
          </Link>
        </li>
        {user ? (
          <>
            {/* <li>
              <Link to='/dashboard'>
                <FaTachometerAlt /> Dashboard
              </Link>
            </li> */}
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
    </Provider>
  )
}

export default Header
