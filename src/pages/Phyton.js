import { Outlet, Link } from "react-router-dom";

const Phyton = () => {
    return <div className="listsdiv">
    <div className="listheader">
    <h3>Phyton Tutorial</h3>
    </div>
    <div className="listbody" > <ul>
<li>  <Link to="/Phyton/PhytonIntro">Phyton Home</Link></li>
<li> <Link to="/Phyton/Phytonhome">Phyton Intro</Link></li>
<li> <Link to="/Phyton/Phytoneditors">Phyton Editors</Link></li>
<li> <Link to="/Phyton/Phytonbasic">Phyton Basic</Link></li>
<li> <Link to="/Phyton/Phytonelement">Phyton Element</Link></li>
<li>Phyton Attributes</li>
<li>Phyton Heading</li>
<li>Phyton Paragraph</li>
<li>Phyton Styles</li>
<li>Phyton Formatting</li>
    </ul>
    </div><Outlet />
</div>
  };
  
  export default Phyton;