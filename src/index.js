import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import NoPage from "./pages/NoPage";
import Bootstrap from"./pages/Bootstrap";
import Html from"./pages/Html";
import Phyton from"./pages/Phyton";
import Htmlintro from "./pages/subpgforhtml/Htmlintro";
import Htmlhome from "./pages/subpgforhtml/Htmlhome";
import Htmleditors from "./pages/subpgforhtml/Htmleditors";
import Htmlbasic from "./pages/subpgforhtml/Htmlbasic";
import Htmlelement from "./pages/subpgforhtml/Htmlelement";
import Csshome from "./pages/Subpgforcss/Csshome";
import Cssintro from "./pages/Subpgforcss/Cssintro";
import Cssbasic from "./pages/Subpgforcss/Cssbasic";
import Csseditors from "./pages/Subpgforcss/Csseditors";
import Csselement from "./pages/Subpgforcss/Csselement";
import JShome from "./pages/Subpgforjs/JShome";
import JSIntro from "./pages/Subpgforjs/JSIntro";
import JSeditors from "./pages/Subpgforjs/JSeditors";
import JSbasic from "./pages/Subpgforjs/JSbasic";
import JSelement from "./pages/Subpgforjs/JSelement";
import Bootstraphome from "./pages/Subpgforbootstrap/Bootstraphome";
import Bootstrapintro from "./pages/Subpgforbootstrap/Bootstrapintro";
import Bootstrapeditors from "./pages/Subpgforbootstrap/Bootstrapeditors";
import Bootstrapbasic from "./pages/Subpgforbootstrap/Bootstrapbasic";
import Bootstrapelement from "./pages/Subpgforbootstrap/Bootstrapelement";
import Phytonhome from "./pages/Subpgforphyton/Phytonhome";
import PhytonIntro from "./pages/Subpgforphyton/PhytonIntro";
import Phytoneditors from "./pages/Subpgforphyton/Phytoneditors";
import Phytonbasic from "./pages/Subpgforphyton/Phytonbasic";
import Phytonelement from "./pages/Subpgforphyton/Phytonelement";
import "./myscss.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Html" element={<Html />} >
     <Route path="htmlhome" element={<Htmlhome />} />
      <Route path="htmlintro" element={<Htmlintro />} />
       <Route path="Htmleditors" element={<Htmleditors />} />
        <Route path="Htmlbasic" element={<Htmlbasic />} />
         <Route path="Htmlelement" element={<Htmlelement />} />
          </Route>
           <Route path="Css" element={<Css />} >
      <Route path="Csshome" element={<Csshome />} />
       <Route path="Cssintro" element={<Cssintro />} />
        <Route path="Csseditors" element={<Csseditors />} />
         <Route path="Cssbasic" element={<Cssbasic />} />
         <Route path="Csselement" element={< Csselement />}/>
          </Route>
            <Route path="Javascript" element={<Javascript />} >
      <Route path="JShome" element={<JShome />} />
       <Route path="JSIntro" element={<JSIntro />} />
        <Route path="JSeditors" element={<JSeditors />} />
         <Route path="JSbasic" element={<JSbasic />} />
         <Route path="JSelement" element={< JSelement />}/>
          </Route>
          <Route path="Bootstrap" element={<Bootstrap />} >
      <Route path="Bootstraphome" element={<Bootstraphome />} />
       <Route path="Bootstrapintro" element={<Bootstrapintro />} />
        <Route path="Bootstrapeditors" element={<Bootstrapeditors />} />
         <Route path="Bootstrapbasic" element={<Bootstrapbasic />} />
         <Route path="Bootstrapelement" element={< Bootstrapelement />}/>
          </Route>
          <Route path="Phyton" element={<Phyton />} >
      <Route path="Phytonhome" element={<Phytonhome />} />
       <Route path="PhytonIntro" element={<PhytonIntro />} />
        <Route path="Phytoneditors" element={<Phytoneditors />} />
         <Route path="Phytonbasic" element={<Phytonbasic />} />
         <Route path="Phytonelement" element={< Phytonelement />}/>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));