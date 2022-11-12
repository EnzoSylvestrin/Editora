import Head from 'next/head'

import Header from '../components/Header';

import ReiArthur from '../public/assets/ReiArthurImg.jpg';

import { Container, ContainerImg, Description, Mainbtn } from '../styles/HomeStyled';

export default function Home() {
  return (
    <>
      <Head>
        <title>Editora Enzo</title>
      </Head>
      <Header />
      <Container>
        <Description>
          <h1>Rei Arthur</h1>
          <p>e os cavaleiros da tavóla redonda</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda inventore consectetur. autem voluptas nesciunt hic accusantium cupiditate eius minima consectetur voluptatibus aperiam.</span>
          <Mainbtn href='#'>Adquira já</Mainbtn>
        </Description>
        <ContainerImg>
          <img src={ReiArthur.src} alt="Capa do livro rei arthur" />
        </ContainerImg>
      </Container>
    </>
  )
}
