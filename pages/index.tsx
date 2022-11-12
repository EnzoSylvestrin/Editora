import Head from 'next/head'

import Header from '../components/Header';

import ReiArthur from '../public/assets/ReiArthurImg.jpg';

import { Container, ContainerImg, Description } from '../styles/HomeStyled';

export default function Home() {
  return (
    <>
      <Head>
        <title>Editora Enzo</title>
      </Head>
      <Header />
      <Container>
        <Description>
          <h1>Editora Enzo</h1>
        </Description>
        <ContainerImg>
          <img src={ReiArthur.src} alt="Capa do livro rei arthur" />
        </ContainerImg>
      </Container>
    </>
  )
}
