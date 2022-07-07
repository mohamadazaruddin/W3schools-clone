import { Outlet, Link } from "react-router-dom";
const Csseditors = () => {
    return <div className="htmlhm">
<h1>This is Css editors page </h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Css/Cssintro">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Css/Cssbasic">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Csseditors;