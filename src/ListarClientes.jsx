import Cliente from "./Cliente";
import "./ListarClientes.css";

export default function ListarClientes({ clientes = [], excluirCliente, iniciarAlteracao }) {
    return (
        <div className="lista-clientes-container">
            <h2 className="titulo-lista">Clientes Cadastrados</h2>

            {clientes.length === 0 ? (
                <p className="lista-vazia">Nenhum cliente cadastrado</p>
            ) : (

                clientes.map((cliente) => (
                    <Cliente
                        key={cliente._id}
                        id={cliente._id}
                        nome={cliente.nome}
                        email={cliente.email}
                        telefone={cliente.telefone}
                        excluirCliente={excluirCliente}
                        iniciarAlteracao={iniciarAlteracao}
                    />
                ))
            )}

        </div>
    );
}

