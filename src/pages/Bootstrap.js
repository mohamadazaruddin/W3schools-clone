import { Outlet, Link } from "react-router-dom";
const Bootstrap = () => {
    return <div className="listsdiv">
    <div className="listheader">
    <h3>BS4 Tutorial</h3>
    </div>
    <div className="listbody" > <ul>
<li> <Link to="/Bootstrap/Bootstraphome">Bootstrap Home</Link></li>
<li> <Link to="/Bootstrap/Bootstrapintro">Bootstrap Intro</Link></li>
<li> <Link to="/Bootstrap/Bootstrapeditors">Bootstrap Editors</Link></li>
<li> <Link to="/Bootstrap/Bootstrapbasic">Bootstrap Basic</Link></li>
<li> <Link to="/Bootstrap/Bootstrapelement">Bootstrap Element</Link></li>
<li>Bootstrap Attributes</li>
<li>Bootstrap Heading</li>
<li>Bootstrap Paragraph</li>
<li>Bootstrap Styles</li>
<li>Bootstrap Formatting</li>
    </ul>
    </div>   <Outlet />
</div>
  };
  
  export default Bootstrap;