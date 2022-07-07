 import { Outlet, Link } from "react-router-dom";
 const JShome = () => {
    return <div className="htmlhm">
<h1>This is Javascript homepage</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Javascript/JSIntro">Next page </Link> 
</button> </div><Outlet />
    </div>
};
  
  export default JShome;