import {Link} from "react-router-dom";

export default function Main(){
    return(
        <main>
            <article class="text">
                <p>Soc en Francesc</p>
                <p>Disenyador web profesional <br />& Desenvolupador web</p>
                <Link to="/contacte"><button class="hire-btn">Contacta'm</button></Link>
            </article>

            <article class="about">
                <p>Sobre jo</p> <br />
                <p>Desenvolupador y Disenyador</p> <br />
                <p>
                    Hola, em dic Francesc. Sóc Desenvolupador i també dissenyador. Si tens algun projecte o si vols
                    fer un programari per als teus bussiness contacta'm. Ho faig com més aviat millor. T'agradarà molt la meva feina, si no
                    ho fa el canviaré fins que t'agradi.
                </p> <br />

                <p>
                    Sóc tant Desenvolupador com també dissenyador. Si tens algun projecte o vols fer un programari
                    per al teu negoci
                    contacta amb mi. Realitzo el teu projecte el més aviat possible.
                </p> <br />

                <Link to="/contacte"><button>Contacta'm</button></Link>
            </article>
        </main>
    )
}