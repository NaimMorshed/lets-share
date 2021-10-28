import '../../styles/CSS/Navbar.css';

export default function NavBar({ props }) {
    return (
        <div className="Navbar">
            <div className="navbar-parent">
                <span className="navbar-border">{props}</span>
            </div>
        </div>
    )
}
