import React from 'react';
import Gig from './components/Gig';
import './App.css';
import Carbons from './assets/Carbons.png'
import Undercover from './assets/Undercover-hippie.avif'
import Shpongle from './assets/shpongle.jpeg'
// import ClickListener from './components/ClickListener';
// import InputLog from './components/InputLog';
// import Die from './components/Die';


// In this version, the data is hardcoded directly within the App component. 
//This approach is suitable when the data is static, and you don't need to dynamically change the content of the Gig component based on external factors.

const App = () => {
  return (
      <>
      <Gig
        name="Carbon Basen Lifeforms"
        imageSrc={Carbons} 
        description="Doors open: 19:30."
        dateTime="Friday 05 April 2024, 19:30"
        location="London"
      />
      <Gig
        name="Undercover Hippie"
        imageSrc={Undercover}
        description="Doors open: 19:30."
        dateTime="Wednesday 10 April 2024, 19:30"
        location="London"
      />
      <Gig
        name="Shpongle"
        imageSrc={Shpongle}
        description="Doors open: 18:00."
        dateTime="Friday 18 April 2024, 19:00"
        location="London"
      />

    </>)
};

export default App;


// In this version, the data is stored in a separate object (gigData) before being passed to the Gig component. 
// This approach is more flexible and allows you to dynamically update or change the data based on certain conditions or events in your application.

// const App = () => {
//   const gigData = {
//     name: 'Carbon Basen Lifeforms',
//     imageSrc: './assets/Carbons.png',
//     description: 'Doors open: 19:30',
//     dateTime: 'Friday 05 April 2024, 19:30',
//     location: 'London'
//   };

// return (
//   <>
//     <div className="app">
//       <Gig {...gigData} />
//     </div>
//   </>
// );
// };

// export default App;
