import { Link } from 'react-router-dom';
import "./Nav.css";

export default function Nav({ alterando, onCancelarAlteracao }) {
    return (
        <nav>
            <Link to="/"><img src="https://www.svgrepo.com/show/40733/first-aid-kit.svg" alt="" /></Link>
            <h1>CadClinn</h1>
            {/* Links de navegação usando o React Router DOM */}
            <Link to="/">Home</Link>
            <Link to="/form">Cadastro</Link>
            <Link to="/lista">Listar Clientes</Link>
            
            {alterando && (
                <button onClick={onCancelarAlteracao}>
                    Cancelar Alteração
                </button>
            )}
        </nav>
    );
}