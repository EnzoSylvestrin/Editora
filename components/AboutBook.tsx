import { Container, ContainerImg, ContainerRe, Description, WrapperRe } from '../styles/HomeStyled';

type IAbout = {
    titulo: string;
    subtitulo?: string;
    sinopse: string;
    Autor: string;
    cor: string;
    imagem: string;
}

const AboutBook = (props : IAbout) => {
    <Container>
        <Description>
          <h1>{props.titulo}</h1>
          <p>{props.subtitulo}</p>
          <span>{props.sinopse}</span>

          <h3 style={{color: props.cor}}>Autor: {props.Autor}</h3>

        </Description>
        <ContainerImg>
          <img src={props.imagem} alt="Capa do livro" />
        </ContainerImg>
      </Container>
}

export default AboutBook;