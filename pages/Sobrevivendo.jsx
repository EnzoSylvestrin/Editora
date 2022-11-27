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
                <span>A principal obra do maior grupo de rap do Brasil agora publicada em livro, contundente como sempre e atual como nunca. Leitura obrigatória do vestibular da Unicamp. Na virada para os anos 1990, os Racionais MC’s emergiram como um dos mais importantes acontecimentos da cultura brasileira. Incensado pela crítica, o disco Sobrevivendo no inferno vendeu mais de um milhão e meio de cópias.</span>

                <div>
                    <h2>⭐⭐⭐⭐⭐ 5 de 5 estrelas (7 avaliações)</h2>
                </div>

                <h3 style={{color: '#a80a0a'}}>Autor: Racionais Mcs</h3>

                <Mainbtn href='#'>Adquira já</Mainbtn>
                </Description>
                <ContainerImg>
                <img src={SobrevivendoImg.src} alt="Capa do livro rei arthur" />
                </ContainerImg>
            </Container>
            <ContainerComments>
                <h1 className='title'>Avaliações do livro</h1>

                <SingleComment>
                <h1>⭐⭐⭐⭐⭐ Interresante!</h1>
                <p>Por: Julio balestrin, em: 09/10/2021</p>
                <span>Livro muito interresante, adorei!</span>
                </SingleComment> 

                <SingleComment last>
                <h1>⭐⭐⭐⭐⭐ Obra prima.</h1>
                <p>Por: Pedro Tralha, em: 08/11/2021</p>
                <span>Muito bom, obra prima. Uma das melhores obras que já li.</span>
                </SingleComment>
                
            </ContainerComments>
            <Footer />
        </>
    )
}