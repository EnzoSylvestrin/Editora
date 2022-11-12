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
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda inventore consectetur. autem voluptas nesciunt hic accusantium cupiditate eius minima consectetur voluptatibus aperiam.</span>

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
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos impedit necessitatibus atque! Minus sequi quis repudiandae consequatur quia</span>
        </SingleComment> 

        <SingleComment last>
          <h1>⭐⭐⭐⭐ Ótimo livro!!</h1>
          <p>Por: Aline Da Silva, em: 10/10/2021</p>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos impedit necessitatibus atque! Minus sequi quis repudiandae consequatur quia</span>
        </SingleComment>
        
      </ContainerComments>

      <Footer />
    </>
  )
}
