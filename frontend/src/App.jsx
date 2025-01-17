import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./Components/Navbar"
import Spline from '@splinetool/react-spline';
import { TypeAnimation } from 'react-type-animation';
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white">

    <div className="container">
    <div className="text-box pt-20 typewriter  text-strt left-10">
    <TypeAnimation
      sequence={[
        'Voluntine',
        1300,
        "Let's Volunteer",
        900,
        'Help the community',
        900,
        'Empower Others',
        900,
        'Have Fun',
        900
      ]}
      wrapper="span"
      speed={50}
      style={{ }}
      repeat={Infinity}
    />
            <h4 className="font-bold text-grey-500 ">LOREM IPSUM MAXIMUS SKILL<br/> </h4>
            <p className="text-gray-400 w-2/5 ml-5 mt-5 mb-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, accusamus! Ratione, nostrum iusto optio voluptatem, illum cupiditate, quis sint totam illo dolore magni temporibus eligendi laboriosam dolorum necessitatibus animi fugiat?</p>
            <a className='ml-5 mt-10 btn rounded-lg px-20 py-3 text-bold hover:bg-white mt-20 ' href="/login/" >Get Started</a>
            
        </div>
    </div>
    <Navbar />
    <div className="absolute right-0 top-0" > <svg  className='h-screen z-0' id="visual" viewBox="0 0 450 900" width="366" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M160 900L171.3 875C182.7 850 205.3 800 211 750C216.7 700 205.3 650 204.8 600C204.3 550 214.7 500 213.7 450C212.7 400 200.3 350 187.8 300C175.3 250 162.7 200 158.5 150C154.3 100 158.7 50 160.8 25L163 0L450 0L450 25C450 50 450 100 450 150C450 200 450 250 450 300C450 350 450 400 450 450C450 500 450 550 450 600C450 650 450 700 450 750C450 800 450 850 450 875L450 900Z" fill="#67c5b1"></path><path d="M249 900L249.8 875C250.7 850 252.3 800 253.7 750C255 700 256 650 246.8 600C237.7 550 218.3 500 214.3 450C210.3 400 221.7 350 234.7 300C247.7 250 262.3 200 265.7 150C269 100 261 50 257 25L253 0L450 0L450 25C450 50 450 100 450 150C450 200 450 250 450 300C450 350 450 400 450 450C450 500 450 550 450 600C450 650 450 700 450 750C450 800 450 850 450 875L450 900Z" fill="#54b8a2"></path><path d="M292 900L292.3 875C292.7 850 293.3 800 285 750C276.7 700 259.3 650 257.2 600C255 550 268 500 279.7 450C291.3 400 301.7 350 301.5 300C301.3 250 290.7 200 286.7 150C282.7 100 285.3 50 286.7 25L288 0L450 0L450 25C450 50 450 100 450 150C450 200 450 250 450 300C450 350 450 400 450 450C450 500 450 550 450 600C450 650 450 700 450 750C450 800 450 850 450 875L450 900Z" fill="#3fac92"></path><path d="M307 900L308.3 875C309.7 850 312.3 800 321.2 750C330 700 345 650 346.2 600C347.3 550 334.7 500 328.2 450C321.7 400 321.3 350 321.7 300C322 250 323 200 327.7 150C332.3 100 340.7 50 344.8 25L349 0L450 0L450 25C450 50 450 100 450 150C450 200 450 250 450 300C450 350 450 400 450 450C450 500 450 550 450 600C450 650 450 700 450 750C450 800 450 850 450 875L450 900Z" fill="#28a083"></path><path d="M393 900L390.2 875C387.3 850 381.7 800 378.8 750C376 700 376 650 373 600C370 550 364 500 364.8 450C365.7 400 373.3 350 378.5 300C383.7 250 386.3 200 383.8 150C381.3 100 373.7 50 369.8 25L366 0L450 0L450 25C450 50 450 100 450 150C450 200 450 250 450 300C450 350 450 400 450 450C450 500 450 550 450 600C450 650 450 700 450 750C450 800 450 850 450 875L450 900Z" fill="#009473"></path></svg></div>
    </div>
  )
}

export default App
