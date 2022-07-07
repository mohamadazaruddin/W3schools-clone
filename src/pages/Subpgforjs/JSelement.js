import { Outlet, Link } from "react-router-dom";
const JSelement = () => {
    return <div className="htmlhm">
<h1>This is Javascript element page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Javascript/JSbasic">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Javascript/JShome">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default JSelement;