import { Outlet, Link } from "react-router-dom";
const JSbasic = () => {
    return <div className="htmlhm">
<h1>This is Javascript basic page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Javascript/JSeditors">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Javascript/JSelement">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default JSbasic;