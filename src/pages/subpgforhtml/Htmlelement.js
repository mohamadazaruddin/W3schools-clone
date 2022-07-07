import { Outlet, Link } from "react-router-dom";
const Htmlelement = () => {
    return <div className="htmlhm">
<h1>This is html element page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Html/Htmlbasic">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Html/Htmlhome">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Htmlelement;