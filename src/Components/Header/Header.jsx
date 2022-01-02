import React, { useContext } from 'react';
import './header.scss'
import { Link } from 'react-router-dom'
import { authCtx } from '../../App'

function Header() {
  const { token,setToken } = useContext(authCtx)

  return (
    <div className="header">
      <Link to='/'><h1>Regrutify</h1></Link>
      <div>
      {
        token?<>
        <Link to='/'><span>Home</span></Link>
        <Link to='/admin/reports'><span>Reports</span></Link>
        <Link to='/admin/reports/new-report'><span>Create Report</span></Link>
        </>:<Link to='/'><span>Home</span></Link>
      }
      {
        localStorage.getItem('token') ?
          <Link to='/'><button onClick={() => {
            setToken('')
            localStorage.clear()
          }}>LOGOUT</button></Link> :
          <Link to='/login'><button>LOGIN</button></Link>
      }
      </div>
    </div>
  );
}

export default Header;