import { Outlet, Link } from "react-router-dom";
const Htmlbasic = () => {
    return <div className="htmlhm">
<h1>This is html basic page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Html/Htmleditors">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Html/Htmlelement">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Htmlbasic;