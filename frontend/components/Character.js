import React, {useState} from 'react'

function Character({data}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
const [showHomeworld, setShowHomeworld] = useState(false) 
const toggle = () => setShowHomeworld(!showHomeworld)
  return (
    <div className="character-card" onClick={toggle}>
      <h3 className="character-name">{data.name}</h3>
      {showHomeworld && <p>Planet: <span className="character-planet">{data.homeworld.name}</span></p>}     
    </div>
  )
}

export default Character

// //import React, { useState } from 'react';

// function ToggleComponent() {
//   // Initialize state variable 'isShowing' to 'false'
//   const [isShowing, setIsShowing] = useState(false);

//   // Define a click handler that will toggle 'isShowing' between true and false
//   const handleClick = () => {
//     setIsShowing(!isShowing);
//   };

//   return (
//     <div>
//       {/* Button to trigger the toggle */}
//       <button onClick={handleClick}>
//         {isShowing ? 'Hide' : 'Show'} content
//       </button>

//       {/* Content that is conditionally rendered based on 'isShowing' */}
//       {isShowing && <div>This is some content that can be toggled on/off.</div>}
//     </div>
//   );
// }

// export default ToggleComponent;
