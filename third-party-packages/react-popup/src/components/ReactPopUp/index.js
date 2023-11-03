import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
 <div className="popup-container">
   <Popup
     modal
     trigger={
       <button className="trigger-button" type="button">
         Trigger
       </button>
     }
   >
     {close => (
       <>
          <div>
            <p>React is a popular and widely used programming language</p>
          </div>
         <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
           Close
         </button>
       </>
     )}
   </Popup>
 </div>
)
export default ReactPopUp