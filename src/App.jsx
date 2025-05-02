import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/LandPage'
import PreBuildRoadmap from './pages/PreBuildRoadmap'
import MyLearning from './pages/MyLearning'
import RoadmapDetails from './pages/RoadmapDetails'
import { RaodmapContext } from './context/RaodmapContext'
import RoadmapForm from './pages/RoadmapForm'
import AiRoadmapDetails from './pages/AiRoadmapDetails'
import BottomNav from './Components/BottomNav'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify';
import ShowTopicDetails from './pages/ShowTopicDetails'
import Policy from './pages/Policy'
import Contact from './pages/Contact'

const App = () => {

   const {isDark}= useContext(RaodmapContext);

   
  return (
   <>
        <BrowserRouter>
      <div className={`w-full min-h-screen ${isDark?"bg-zinc-800 text-white":"bg-[#f9fafb]  text-[#111827]"} transition duration-500`}>
        <Navbar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/roadmap' element={<PreBuildRoadmap/>} />
            <Route path='/my-learning' element={<MyLearning/>}/>
            <Route path='/:dets/:id' element={<RoadmapDetails/>}/>
            <Route path='/create-with-ai' element={<RoadmapForm/>} />
            <Route path='/Ai/roadmap' element={<AiRoadmapDetails/>} />
            <Route path='/topic-details' element={<ShowTopicDetails />} />
            <Route path="/term" element={<Policy />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <BottomNav />
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      </div>
        </BrowserRouter>
   </>
  )
}

export default App