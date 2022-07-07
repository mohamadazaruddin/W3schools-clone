import { Outlet, Link } from "react-router-dom";
const JSeditors = () => {
    return <div className="htmlhm">
<h1>This is Javascript editors page </h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Javascript/JSIntro">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Javascript/JSbasic">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default JSeditors;