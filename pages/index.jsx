import Head from 'next/head'
import Footer from '../components/Footer';

import Header from '../components/Header';

import ReiArthur from '../public/assets/ReiArthurImg.jpg';

import { Container, ContainerComments, ContainerImg, Description, Mainbtn, SingleComment } from '../styles/HomeStyled';

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

          <div>
            <h2>⭐⭐⭐⭐⭐ 5 de 5 estrelas (7 avaliações)</h2>
          </div>

          <h3 style={{color: '#805318'}}>Autor: Howard Pyle</h3>

          <Mainbtn href='#'>Adquira já</Mainbtn>
        </Description>
        <ContainerImg>
          <img src={ReiArthur.src} alt="Capa do livro rei arthur" />
        </ContainerImg>
      </Container>
      <ContainerComments>
        <h1 className='title'>Avaliações do livro</h1>

        <SingleComment>
          <h1>⭐⭐⭐⭐⭐ Muito bom!</h1>
          <p>Por: Amanda Iassia, em: 10/10/2021</p>
          <span>Livro encantador, uma das melhores histórias que ja li!</span>
        </SingleComment> 

        <SingleComment last>
          <h1>⭐⭐⭐⭐ Ótimo livro!!</h1>
          <p>Por: Aline Da Silva, em: 10/10/2021</p>
          <span>A capa me convenceu a comprar, e a história é um clássico, um prazer de ler.</span>
        </SingleComment>
        
      </ContainerComments>

      <Footer />
    </>
  )
}
