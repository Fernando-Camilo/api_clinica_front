import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import ListaClientes from "./ListarClientes";
import CriarCliente from "./CriarCliente";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";

const ClienteContainer = () => {

  const navigate = useNavigate();

  const [clientes, setClientes] = useState([]);
  const [atualizacao, setAtualizacao] = useState(0);
  const [alterando, setAlterando] = useState(false);

  const [idAlterando, setIdAlterando] = useState("");
  const [nomeAlterando, setNomeAlterando] = useState("");
  const [emailAlterando, setEmailAlterando] = useState("");
  const [telefoneAlterando, setTelefoneAlterando] = useState("");

  // Carregar lista de clientes
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/clientes`)
      .then((resposta) => {
        setClientes(resposta.data);
      });
  }, [atualizacao]);

  // Excluir
  function excluirCliente(clienteid) {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/clientes/${clienteid}`)
      .then((resposta) => {
        if (resposta.status == 200) {
          alert("Cliente excluído com sucesso.");
          setAtualizacao(atualizacao + 1);
        } else {
          alert("Falha na exclusão");
        }
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  }

  // Alterar
  function alterarCliente(id, novoNome, novoEmail, novoTelefone) {
    const clienteAlterado = {
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone,
    };

    axios
      .patch(`${import.meta.env.VITE_BACKEND_URL}/clientes/${id}`, clienteAlterado)
      .then((resposta) => {
        if (resposta.status == 200) {
          alert("Cliente alterado com sucesso!");
          setAtualizacao(atualizacao + 1);
          setAlterando(false);
        } else {
          alert("Falha na atualização");
        }
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  }

  // Incluir
  function incluirCliente(novoNome, novoEmail, novoTelefone) {
    const novoCliente = {
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone,
    };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/clientes`, novoCliente)
      .then((resposta) => {
        if (resposta.status == 201) {
          alert("Cliente cadastrado com sucesso.");
          setAtualizacao(atualizacao + 1);
        }
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  }

  // Preparar alteração
  function iniciarAlteracao(id, nome, email, telefone) {
    setAlterando(true);
    setIdAlterando(id);
    setNomeAlterando(nome);
    setEmailAlterando(email);
    setTelefoneAlterando(telefone);

    navigate('/form');
  }

  // Cancelar alteração
  function cancelarAlteracao() {
    setAlterando(false);
    navigate('/lista');
  }

  return (
    <>
      
      <Nav 
        alterando={alterando} 
        onCancelarAlteracao={cancelarAlteracao}
      />

      <div>
        <Routes>

          <Route path="/" element={ < Home /> } />

          <Route path="/form" element={
            <CriarCliente
                incluirCliente={incluirCliente}
                alterarCliente={alterarCliente}
                alterando={alterando}
                onCancelarAlteracao={cancelarAlteracao}
                id={idAlterando}
                nomeAlt={nomeAlterando}
                emailAlt={emailAlterando}
                telefoneAlt={telefoneAlterando}
            />
          }/>

          <Route path="/lista" element={
            <ListaClientes
                clientes={clientes}
                excluirCliente={excluirCliente}
                iniciarAlteracao={iniciarAlteracao}
            />
          } />
        
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />

        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
        <ClienteContainer />
    </BrowserRouter>
  );
}

export default App;
