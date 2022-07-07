import { Outlet, Link } from "react-router-dom";
const Htmleditors = () => {
    return <div className="htmlhm">
<h1>This is html editor page </h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Html/Htmlintro">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Html/Htmlbasic">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Htmleditors;