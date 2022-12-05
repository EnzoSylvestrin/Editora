import { Container, ContainerImg, Description } from '../styles/HomeStyled';

import ReiArthur from '../public/assets/ReiArthurImg.jpg';

type IAbout = {
  titulo: string;
  subtitulo?: string;
  sinopse: string;
  autor: string;
  cor: string;
  imagem: string;
}

const AboutBook = (props : IAbout) => {
  return(
    <Container>
      <Description>
        <h1>{props.titulo}</h1>
        {props.subtitulo ? <p>{props.subtitulo}</p> : <></>}
        <span>{props.sinopse}</span>

        <h3 style={{color: props.cor}}>Autor: {props.autor}</h3>

      </Description>
      <ContainerImg>
        <img src={props.imagem} alt="Capa do livro" />
      </ContainerImg>
    </Container>
  )
}

export default AboutBook;