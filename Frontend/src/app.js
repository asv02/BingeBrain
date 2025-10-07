import React from "react";
import '../src/index.css';
import Body from '../src/components/Body'
import ReactDOM from "react-dom/client";

const App = ()=>
    {
         return (
              <Body/>
        )
    }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)