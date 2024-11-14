import { Link } from "react-router-dom";
import styled from "styled-components";

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

function OpcoesHeader() {
    return (
        <Opcoes>    
            {textoOpcoes.map((palavra) => (
                <Link to={`/${palavra.toLowerCase()}`}><Opcao><p>{palavra}</p></Opcao></Link>           
            ))}          
        </Opcoes>
    )
}

export default OpcoesHeader;