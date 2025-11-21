import './Cliente.css';

export default function Cliente({ id, nome, email, telefone, excluirCliente, iniciarAlteracao }) {
    return (
        <article className="cliente-card">
            <h3>{nome}</h3>

            <div><strong>Email:</strong> {email}</div>
            <div><strong>Telefone:</strong> {telefone}</div>

            <button
                onClick={() => excluirCliente(id)}
            >
                Excluir
            </button>

            <button
                onClick={() => iniciarAlteracao(id, nome, email, telefone)}
            >
                Alterar
            </button>
        </article>
    );
}
