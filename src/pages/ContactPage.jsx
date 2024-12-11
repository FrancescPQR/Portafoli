export default function ContactPage(){
    return(
        <>      
            <main>  
                <div class="container">
                    <h1>Contacta'm</h1>
                    <form>
                        <label for="nom">Nom:</label>
                        <input type="text" id="nom" name="nom" placeholder="Escriu el teu nom" required />

                        <label for="email">Correu electrònic:</label>
                        <input type="email" id="email" name="email" placeholder="Escriu el teu correu electrònic" required />

                        <label for="missatge">Missatge:</label>
                        <textarea id="missatge" name="missatge" rows="5" placeholder="Escriu el teu missatge" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </main>
        </>
    )
}