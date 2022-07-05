// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/ravi_components/Home';
import ViewFeedbacks from './components/ravi_components/ViewFeedbacks';
//import Header from './components/ravi_components/RavHeader';
import AddFeedback from './components/ravi_components/AddFeedback';
import EditFeedback from './components/ravi_components/EditFeedback';
import PostFeedbacks from './components/ravi_components/PostFeedbacks';
import ReplyFeedback from './components/ravi_components/ReplyFeedback';
//import Footer from './components/ravi_components/RaviFooter';

import {HashRouter, HashRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    
      <div>
        
        <HashRouter>
        <Routes>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="/add" element={<AddFeedback/>}/>
        <Route path="/view" element={<ViewFeedbacks/>}/>
        <Route path="/edit/:id" element={<EditFeedback/>}/>
        <Route path="/view/:id" element={<PostFeedbacks/>}/>
        <Route path="/reply/:id" element={<ReplyFeedback/>}/>
        
        
        
        
        



        </Routes>
        </HashRouter>

      
      </div>
        

    
  );
}

export default App;
