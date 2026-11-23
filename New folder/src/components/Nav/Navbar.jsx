
import "./nav.css"

export default function Nav() {
  return (
    <div>
      <header className="header">
             <nav>
                 
                    <div className="container mt-2 ele-center"> 
                             <h1> loge </h1>
                                  <ul>
                                     <li>  about 
                                          </li>
                                     <li>  about  </li>
                                      <li> home  </li>
                                  </ul>                          
                  </div>
             
             </nav>
              <div>
                 <button className="btn btn-outline-primary">register</button>
                  <button className="btn btn-outline-danger"> login   </button>
              </div>
              
          
      </header>
    </div>
  )
}
