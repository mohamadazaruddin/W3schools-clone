import { Outlet, Link } from "react-router-dom";
const Phytoneditors = () => {
    return <div className="htmlhm">
<h1>This is Phyton editors  page </h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapintro">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapbasic">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default Phytoneditors;