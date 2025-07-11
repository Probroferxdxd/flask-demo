import React, {useState, useEffect} from 'react'

function Contact() {
 const [show, setShow] = useState(false)
   
     useEffect(()=>{
       setShow(true)
     },[])
   
     return (
       <div className={`page ${show ? "show" : ""} seccion-contacto`}>
         <h1>Bienvenido a Contacto</h1>
         <p>Contenido de la página Contacto</p>
       </div>
     );
}

export default Contact;