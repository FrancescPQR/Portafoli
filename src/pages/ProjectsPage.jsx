export default function ProjectsPage(){
    return(
        <>      
            <main>  
                <article class="services">
                    <div class="services-text">
                        <p>Projectes</p>
                        <p>Qualitat garantitzada</p>
                        <p>Els millors projectes</p>
                    </div>

                    <div class="box-container">
                        <div class="box-1">
                            <span>1</span>
                            <p class="heading">Tenda de roba</p>
                            <p class="details">Pàgina web d'una tenda de roba feta amb React.</p>
                            <button>Llegir més...</button>
                        </div>

                        <div class="box-2">
                            <span>2</span>
                            <p class="heading">Blog</p>
                            <p class="details">Pàgina web sobre un bloc feta amb React.</p>
                            <button>Llegir més...</button>
                        </div>

                        <div class="box-3">
                            <span>3</span>
                            <p class="heading">Aplicació del temps</p>
                            <p class="details">Aplicació del temps feta amb React.</p>
                            <button>Llegir més...</button>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}