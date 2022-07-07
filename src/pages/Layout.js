import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
      <>
        <nav className="layoutnav">
          <ul className="layoutul">
            <li>
              <Link to="/">
              <i className="fas fa-home"></i></Link>
            </li>
             <li>
              <Link to="/Html/Htmlhome">Html</Link>
             
            </li>
            <li>
              <Link to="/Css/Csshome">Css</Link>
            </li>
            <li>
              <Link to="/Javascript/JShome">Js</Link>
            </li>
             <li>
              <Link to="/Bootstrap/Bootstraphome">Bootstrap</Link>
            </li>
               <li>
              <Link to="/Phyton">Phnhrntethyton</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;