import { useEffect, useState } from "react";
import "./CriarCliente.css";

export default function CriarCliente({
    incluirCliente,
    alterarCliente,
    alterando,
    onCancelarAlteracao,
    id,
    nomeAlt,
    emailAlt,
    telefoneAlt
}) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    useEffect(() => {
        if (alterando) {
            setNome(nomeAlt);
            setEmail(emailAlt);
            setTelefone(telefoneAlt);
        }
    }, [alterando]);

    function processarEnvio(evento) {
        evento.preventDefault();

        if (nome !== "" && email !== "" && telefone !== "") {

            if (alterando) {
                alterarCliente(id, nome, email, telefone);
            } else {
                incluirCliente(nome, email, telefone);
            }

            // Limpar
            setNome("");
            setEmail("");
            setTelefone("");

        } else {
            alert("Preencha todos os campos");
        }
    }

    return (
        <div className="formulario-container">
            <h2>{alterando ? "Alterar" : "Cadastrar"} Cliente</h2>

            <form onSubmit={processarEnvio}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                        type="text"
                        id="telefone"
                        value={telefone}
                        onChange={(evento) => setTelefone(evento.target.value)}
                    />
                </div>

                <button type="submit">
                    {alterando ? "Salvar Alterações" : "Cadastrar"}
                </button>

                {alterando && (
                    <button
                        onClick={(evento) => {
                            evento.preventDefault();
                            setNome("");
                            setEmail("");
                            setTelefone("");
                            onCancelarAlteracao();
                        }}
                    >
                        Cancelar
                    </button>
                )}
            </form>
        </div>
    );
}
