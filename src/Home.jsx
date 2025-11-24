import "./Home.css";

export default function Home() {
    return (
        <main>

            <div className="line">
                <img src="https://www.svgrepo.com/show/40733/first-aid-kit.svg" alt="" />
                <h1>Bem vindo(a) ao CadClinn</h1>
            </div>

            <article>
                <p>Fique à vontade para:</p>
                <ul>
                    <li>Inserir Clientes</li>
                    <li>Listar Clientes</li>
                    <li>Alterar Clientes</li>
                    <li>Excluir Clientes</li>
                </ul>
            </article>
            
        </main>
    );
}