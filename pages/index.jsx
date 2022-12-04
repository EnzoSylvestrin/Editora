import Head from 'next/head'
import Footer from '../components/Footer';

import Header from '../components/Header';

import ReiArthur from '../public/assets/ReiArthurImg.jpg';

import { Container, ContainerImg, ContainerRe, Description, WrapperRe } from '../styles/HomeStyled';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rei arthur</title>
      </Head>
      <Header />
      <Container>
        <Description>
          <h1>Rei Arthur</h1>
          <p>E os cavaleiros da távola redonda</p>
          <span>O livro relata as batalhas de Arthur com o Cavaleiro Negro e com o Duque da Nortúmbria, e seus esforços para manter consigo a mágica Excalibur; seu amor por Lady Guinevere e as origens da Távola Redonda; Merlin, traído pela feiticeira Vivien, além de Morgana e a Dama do Lago; Sir Pellias, Sir Gawaine e tantos outros nobres cavaleiros. E, ao fim, vê-se formulado o enigma de cuja resposta depende a vida de Arthur...</span>

          <h3 style={{color: '#805318'}}>Autor: Howard Pyle</h3>

        </Description>
        <ContainerImg>
          <img src={ReiArthur.src} alt="Capa do livro rei arthur" />
        </ContainerImg>
      </Container>

      <ContainerRe>
        <h1>Reelançamento</h1>

        <WrapperRe>
          <div>
            <p>Publicação: Livro digital</p>
            <p>Adicionais: Chaveiro com espada</p>
            <p>Preço: R$ 34,99</p>
          </div>
        </WrapperRe>

      </ContainerRe>

      <Footer />
    </>
  )
}
