import { Outlet, Link } from "react-router-dom";
const Css = () => {
    return <div className="listsdiv">
    <div className="listheader">
    <h3>Css Tutorial</h3>
    </div>
    <div className="listbody" > <ul>
<li><Link to="/Css/Csshome">Css Home</Link> </li>
<li><Link to="/Css/Cssintro ">Css Intro</Link></li>
<li><Link to="/Css/Csseditors">Css Editors</Link></li>
<li><Link to="/Css/Cssbasic">Css Basic</Link> </li>
<li><Link to="/Css/Csselement">Css Element</Link></li>
<li>Css Attributes</li>
<li>Css Heading</li>
<li>Css Paragraph</li>
<li>Css Styles</li>
<li>Css Formatting</li>
    </ul>
    </div> <Outlet />
</div>
  };
  
  export default Css;