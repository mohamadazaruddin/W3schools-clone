import { Outlet, Link } from "react-router-dom";
const Htmlintro = () => {
    return <div className="htmlhm">
<h1>This is html intropage</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Html/Htmlhome">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Html/Htmleditors">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Htmlintro;