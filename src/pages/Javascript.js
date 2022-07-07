import { Outlet, Link } from "react-router-dom";
const Javascript = () => {
    return <div className="listsdiv">
    <div className="listheader">
    <h3>JS Tutorial</h3>
    </div>
    <div className="listbody" > <ul>
<li> <Link to="/Javascript/JShome">JS Home</Link></li>
<li><Link to="/Javascript/JSIntro">JS Intro</Link></li>
<li><Link to="/Javascript/JSeditors">JS Editors</Link></li>
<li><Link to="/Javascript/JSbasic">JS Basic</Link></li>
<li><Link to="/Javascript/JSelement">JS Element</Link></li>
<li>JS Attributes</li>
<li>JS Heading</li>
<li>JS Paragraph</li>
<li>JS Styles</li>
<li>JS Formatting</li>
    </ul>
    </div>  <Outlet />
</div>
  };
  
  export default Javascript;