import { Outlet, Link } from "react-router-dom";
const Cssintro = () => {
    return <div className="htmlhm">
<h1>This is Css intropage</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Css/Csshome">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Css/Csseditors">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Cssintro;