import Head from "next/head";

import { Container, ContainerImg, ContainerRe, Description, WrapperRe} from "../styles/HomeStyled";

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

                    <h3 style={{color: '#061db3'}}>Autor: Pero vaz de caminha</h3>
                </Description>

                <ContainerImg>
                    <img src={ACartaImg.src} alt="Capa do livro rei arthur" />
                </ContainerImg>
                
            </Container>

            <ContainerRe>
                <h1>Reelançamento</h1>

                <WrapperRe>
                    <div>
                        <p>Publicação: Livro digital na amazon</p>
                        <p>Preço: R$ 29,99</p>
                    </div>
                </WrapperRe>

            </ContainerRe>

            <Footer />
        </>
    )
}