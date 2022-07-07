 import { Outlet, Link } from "react-router-dom";
 const Home = () => {
    return <div><section className="homepgsections">
    <div className="divfor learninghtml"><div><h2> HTML</h2>
    <p>The language for building web pages</p> <button className="btn gotobtn">  <Link to="/Html/Htmlhome">Learn HTML</Link> </button></div></div></section>
    <section className="homepgsections" ><div  className="divfor learningcss" >
<div><h2> CSS</h2>    <p>The language for styling web pages</p>  <button className="btn gotobtn">  <Link to="/Css/Csshome">Learn CSS</Link> </button></div></div></section>
    <section className="homepgsections" ><div className="divfor learningjs"   >
    <div><h2> JAVASCRIPT</h2>     <p>The language for programming web pages    </p> <button className="btn gotobtn">  <Link to="/Javascript/JShome">Learn JAVASCRIPT</Link> </button></div></div></section>
    <section className="homepgsections"><div  className="divfor learningbs4">
    <div><h2> BOOTSTRAP</h2>    <p>
   A CSS framework for designing better web pages
    </p> <button className="btn gotobtn">  <Link to="/Bootstrap/Bootstraphome">Learn BOOTSTRAP </Link>  </button><Link to="/Bootstrap/Bootstrapbasic"></Link></div></div></section>
    <section className="homepgsections"><div className="divfor learningphyton" >
    <div><h2> PHYTON</h2>    <p>
A popular programming language
    </p> <button className="btn gotobtn">  <Link to="/Phyton">Learn PHYTON</Link> </button></div></div></section>
    <Outlet />
    </div>
  };
  
  export default Home;