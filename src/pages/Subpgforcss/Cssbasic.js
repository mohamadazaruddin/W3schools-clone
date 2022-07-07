import { Outlet, Link } from "react-router-dom";
const Cssbasic = () => {
    return <div className="htmlhm">
<h1>This is Css basic page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Css/Csseditors">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Css/Csselement">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Cssbasic;