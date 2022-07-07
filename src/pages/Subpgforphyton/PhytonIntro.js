import { Outlet, Link } from "react-router-dom";
const PhytonIntro = () => {
    return <div className="htmlhm">
<h1>This is Phyton Intro  page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstraphome">  Previous page  </Link> </button>
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapeditors">Next page </Link> </button>
</div><Outlet />
    </div>
};
  
  export default PhytonIntro;