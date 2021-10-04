import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Advancing Engaged Citizenship</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/export-pdf">Export PDF</Link>
        <Link to="/multi-step-form">Multistep Form</Link>
        <Link to="/file-upload">File Upload</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>New Project</Link>
      </div>
    </nav>
  );
}

export default Navbar;