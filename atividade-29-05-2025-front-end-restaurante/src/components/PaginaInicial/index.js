import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logoRestaurante.png";
import "./styles.css";

function PaginaInicial() {
  const navigate = useNavigate();
  return (
    <div className="ContainerPaginaInicial">
      <img
        className="logo"
        src={logo}
        alt="Logo da empresa"
        onClick={() => navigate("/")}
      />

      <h1>Bem Vindo ao Prato cheio</h1>

      <button onClick={() => navigate("/Cardapio")} className="link-usuarios">
        Cardapio
      </button>
      <button onClick={() => navigate("/Cadastro")} className="link-usuarios">
        Cadastro de Pratos
      </button>
    </div>
  );
}

export default PaginaInicial;
