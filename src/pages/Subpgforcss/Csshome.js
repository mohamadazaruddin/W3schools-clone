 import { Outlet, Link } from "react-router-dom";
 const Csshome = () => {
    return <div className="htmlhm">
<h1>This is Css homepage</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Css/Cssintro">Next page </Link> 
</button> </div><Outlet />
    </div>
};
  
  export default Csshome;