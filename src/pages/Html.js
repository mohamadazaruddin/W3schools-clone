import { Outlet, Link } from "react-router-dom";
const Html = () => {
    return <div className="htmlcontent">
    <div className="listsdiv">
    <div className="listheader">
    <h3>Html Tutorial</h3>
    </div>
    <div className="listbody" > <ul>
<li> <Link to="/Html/Htmlhome">Html Home</Link></li>
<li> <Link to="/Html/Htmlintro">Html Intro</Link></li>
<li> <Link to="/Html/Htmleditors">Html Editors</Link></li>
<li><Link to="/Html/Htmlbasic">Html Basic</Link></li>
<li><Link to="/Html/Htmlelement">Html Element</Link></li>
<li>Html Attributes</li>
<li>Html Heading</li>
<li>Html Paragraph</li>
<li>Html Styles</li>
<li>Html Formatting</li>
    </ul>
    </div>
 
 
        </div>      <Outlet />
     
</div>
   
  };
  
  export default Html;
