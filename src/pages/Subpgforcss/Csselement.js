import { Outlet, Link } from "react-router-dom";
const Csselement = () => {
    return <div className="htmlhm">
<h1>This is Css element page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Css/Cssbasic">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Css/Csshome">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Csselement;