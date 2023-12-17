import { useState } from 'react';
import './App.css'


function getCurrentTheme(){
    const root = document.querySelector(':root');
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark Mode' : 'Light Mode';

    if(root.getAttribute('color-scheme') == 'dark'){
            theme = "Dark Mode"
    }
    else if(root.getAttribute('color-scheme') == 'light'){
        theme = "Light Mode" 
    }
    
    return theme;
  }
  
  function ChangeMode(){
    const root = document.querySelector(':root');

    if(getCurrentTheme() === "Dark Mode"){
        root.setAttribute('color-scheme', `light`);
    }
    else{
        root.setAttribute('color-scheme', `dark`);  
    }
}

function App() {
    const [mode,setMode] = useState(getCurrentTheme())

    return(
        <div>
            <h1 className='text'>{mode}</h1>
            <p className='text'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ipsum commodi nisi 
                suscipit ad qui quia quos quis? Facere nam, quo incidunt qui explicabo atque pariatur 
                molestiae recusandae. Fugiat, assumenda. Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Accusantium suscipit voluptas numquam error 
                consequuntur quis ipsam dolorum libero eaque laudantium, ex reprehenderit 
                explicabo quos ea omnis. Praesentium assumenda voluptatibus dolor.
            </p>
            <button onClick={() => {ChangeMode(); setMode(getCurrentTheme());}}><p className='currentmode'>{mode}</p></button>
        </div>
    )
  
}

export default App
