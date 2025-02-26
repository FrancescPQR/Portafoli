import {Link} from "react-router-dom";

export default function Footer(){
  return (
    <footer>
        <div class="contact-me">
            <p>Tens un projecte en ment?</p> <br />
            <Link to="/contacte"><button>Contacta'm</button></Link>
        </div>
    </footer>
  )
}