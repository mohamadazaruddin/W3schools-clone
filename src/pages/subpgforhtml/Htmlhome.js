 import { Outlet, Link } from "react-router-dom";
 const Htmlhome = () => {
    return <div className="htmlhm">
<h1>This is html homepage</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Html/Htmlintro">Next page </Link> 
</button> </div><Outlet />
    </div>
};
  
  export default Htmlhome;