import { Outlet, Link } from "react-router-dom";
const JSIntro = () => {
    return <div className="htmlhm">
<h1>This is Javascript intropage</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Javascript/JShome">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Javascript/JSeditors">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default JSIntro;