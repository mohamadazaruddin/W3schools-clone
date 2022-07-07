import { Outlet, Link } from "react-router-dom";
const Bootstrapbasic = () => {
    return <div className="htmlhm">
<h1>This is Bootstrap basic page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapeditors">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapelement">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Bootstrapbasic;