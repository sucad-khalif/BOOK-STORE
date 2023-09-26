import {Link} from 'react-router-dom'
import{BsBook} from 'react-icons/bs'
function Header(){

    return <div className="header">
        <h1><BsBook/> BOOK</h1>
        
        <div className='links'>

            <Link to = "/home">Home</Link>
            <Link to= "/allbook" >All Books</Link>
            <Link  to ="/addbooks" >Add Books</Link>
            <Link to ="/register" >Register</Link>
            <Link to="/log">Logout</Link>

           
        
        </div>

        
        

        
    </div>

}
export default Header