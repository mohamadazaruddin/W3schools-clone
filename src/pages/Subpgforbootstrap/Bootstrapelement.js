import { Outlet, Link } from "react-router-dom";
const Bootstrapelement = () => {
    return <div className="htmlhm">
<h1>This is Bootstrap element page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapbasic">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstraphome">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Bootstrapelement;