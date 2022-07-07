import { Outlet, Link } from "react-router-dom";
const Phytonhome = () => {
   return <div className="htmlhm">
<h1>This is Phyton home  page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapintro">Next page </Link> 
</button> </div><Outlet />
   </div>
};
 
 export default Phytonhome;