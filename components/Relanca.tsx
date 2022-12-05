import { ContainerRe, WrapperRe} from "../styles/HomeStyled";

type IRelanca = {
    publicacao: string;
    adicionais?: string;
    evento?: string;
    preco: number;
}

const Relanca = (props : IRelanca) => {
    return (
        <ContainerRe>
            <h1>Reelançamento</h1>

            <WrapperRe>
                <div>
                    <p>Publicação: {props.publicacao}</p>
                    <p>Evento de lançamento: {props.evento}</p>
                    <p>Adicionais: {props.adicionais}</p>
                    <p>Preço: R$ {props.preco.toFixed(2)}</p>
                </div>
            </WrapperRe>

        </ContainerRe>
    );
}

export default Relanca;