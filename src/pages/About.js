import React, {useState, useEffect} from 'react'


function About() {
   const [show, setShow] = useState(false)
  
    useEffect(()=>{
      setShow(true)
    },[])
  
    return (
      <div className={`page ${show ? "show" : ""} seccion-sobre`}>
        <h1>Bienvenido a About</h1>
        <p>Contenido de la página About.</p>
      </div>
    );
}

export default About;