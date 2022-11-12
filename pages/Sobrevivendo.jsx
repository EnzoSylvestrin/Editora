import Head from "next/head";

import { Container, ContainerComments, ContainerImg, Description, Mainbtn, SingleComment } from "../styles/HomeStyled";

import Footer from "../components/Footer";
import Header from "../components/Header";

import SobrevivendoImg from '../public/assets/SobrevivendoImg.jpg';

export default function Sobrevivendo() {
    return (
        <>
            <Head>
                <title>A carta</title>
            </Head>

            <Header />

            <Container>
                <Description>
                <h1>Sobrevivendo no inferno</h1>
                <p></p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda inventore consectetur. autem voluptas nesciunt hic accusantium cupiditate eius minima consectetur voluptatibus aperiam.</span>

                <div>
                    <h2>⭐⭐⭐⭐⭐ 5 de 5 estrelas (7 avaliações)</h2>
                </div>

                <h3 style={{color: '#a80a0a'}}>Autor: Racionais Mc's</h3>

                <Mainbtn href='#'>Adquira já</Mainbtn>
                </Description>
                <ContainerImg>
                <img src={SobrevivendoImg.src} alt="Capa do livro rei arthur" />
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