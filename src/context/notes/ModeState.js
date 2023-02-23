import { useState} from "react";
import modeContext from "./ModeContext";


const ModeState = (props) => {
    const [mode, setmode] = useState('light');
    let toggleMode = () => {
        if (mode === 'dark') {
          document.body.style.backgroundColor = 'white';
          setmode('light');
        //   showalert("Light mode is successfully set", "success");
        }
        else {
          document.body.style.backgroundColor = '#343a40';
          setmode('dark');
        //   showalert("Dark mode is successfully set", "success");
        }
      }
    return (
    
        <modeContext.Provider value={{mode,toggleMode}}>
            {props.children}
        </modeContext.Provider>
      )
}

export default ModeState;