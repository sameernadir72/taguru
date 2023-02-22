import React,{useRef,useState} from "react";

import Body from "./components/Body/Body";
import Resume from "./components/Resume/Resume";
import Editor from "./components/Editor/Editor";
import Navbar from "./components/Header/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 import "./App.css";
// 
function App() {
  
  const sections = {
    basicInfo: "Heading",
    workExp: "Job",

    education: "Education",
    achievement: "Hobbies",
    summary: "Reference",
    other: "Other",
  };
  const resumeRef = useRef();
  
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    // [sections.project]: {
    //   id: sections.project,
    //   sectionTitle: sections.project,
    //   details: [],
    // },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });
  return (
    <div className="App">
       
      <Router >
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {/* <Body/> */}
            <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
        
        />
        
          </Route>
          <Route path="/editor" exact >
            <Editor
              sections={sections}
              information={resumeInformation}
              setInformation={setResumeInformation}
            />
          </Route>
         
          <Route path="/resume" exact >
          <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
         
        />
          </Route>
         

          {/* <Route path="/changeAccount" exact component={ChangeAccount}  /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
