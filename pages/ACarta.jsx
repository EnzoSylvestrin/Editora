import Head from "next/head";

import { Container, ContainerComments, ContainerImg, Description, Mainbtn, SingleComment } from "../styles/HomeStyled";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ACartaImg from '../public/assets/ACartaImg.jpg';

export default function ACarta() {
    return (
        <>
            <Head>
                <title>A carta</title>
            </Head>

            <Header />

            <Container>
                <Description>
                    <h1>A Carta</h1>
                    <p>De pero vaz de caminha</p>
                    <span>Escrita por Pero (Pedro) Vaz de Caminha (1450 – 1500), fidalgo português e escrivão oficial da esquadra de Pedro Álvares Cabral (1467 – 1520), a Carta é um dos documentos mais importantes da história dos descobrimentos portugueses. Em 1500, Caminha foi nomeado escrivão da feitoria a ser erguida em Calicute, na índia, razão pela qual se encontrava na nau capitânia da armada de Cabral naquele mesmo ano, quando a mesma encontrou o Brasil.</span>

                    <div>
                        <h2>⭐⭐⭐⭐⭐ 5 de 5 estrelas (4 avaliações)</h2>
                    </div>

                    <h3 style={{color: '#061db3'}}>Autor: Pero vaz de caminha</h3>

                    <Mainbtn href='#'>Adquira já</Mainbtn>
                </Description>
                <ContainerImg>
                    <img src={ACartaImg.src} alt="Capa do livro rei arthur" />
                </ContainerImg>
            </Container>
            <ContainerComments>
                <h1 className='title'>Avaliações do livro</h1>

                <SingleComment>
                    <h1>⭐⭐⭐⭐ Gostei muito!</h1>
                    <p>Por: Amauri Marcos, em: 10/10/2021</p>
                    <span>recomendo para todos, leitura muito importante!</span>
                </SingleComment> 

                <SingleComment last>
                    <h1>⭐⭐⭐⭐ Ótimo livro!!</h1>
                    <p>Por: Raimunda Charles, em: 10/10/2021</p>
                    <span>Adorei o livro, recomendo 😺</span>
                </SingleComment>
                
            </ContainerComments>
            <Footer />

        </>
    )
}