import {Link} from "react-router"

const navbar = () => {
  return (
    <nav className="navbar">
        {/* Link to the home page */}
        <Link to="/"> 
             <p className="text-2xl font-bold text-gradient">HireWire</p>
        </Link>
        {/* Link to upload page */}
        <Link to="/upload" className="primary-button w-fit"> 
            Upload Resume
        </Link>
    </nav>
  )
}

// NOTE : Check css file for primary pointer code

export default navbar