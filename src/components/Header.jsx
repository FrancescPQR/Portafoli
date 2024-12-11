import {Link} from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav>
                <div class="logo">
                    <p>IES Emili Darder</p>
                </div>

                <div class="menu">
                    <Link to="/">Home</Link>
                    <Link to="/contacte">Contacte</Link>
                    <Link to="/projectes">Projectes</Link>
                </div>
            </nav>
        </header>
    )
}