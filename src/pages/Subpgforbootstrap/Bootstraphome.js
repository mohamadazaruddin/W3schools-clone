import { Outlet, Link } from "react-router-dom";
const Bootstraphome = () => {
   return <div className="htmlhm">
<h1>This is Bootstrap home page</h1>
<div className=" w-100 d-flex justify-content-evenly"> 
<button className="btn gotobtn">  <Link to="/Bootstrap/Bootstrapintro">Next page </Link> 
</button> </div><Outlet />
   </div>
};
 
 export default Bootstraphome;