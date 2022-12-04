import Head from "next/head";

import { Container, ContainerImg, ContainerRe, Description, WrapperRe } from "../styles/HomeStyled";

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

                    <h3 style={{color: '#a80a0a'}}>Autor: Racionais Mcs</h3>

                </Description>
                <ContainerImg>
                    <img src={SobrevivendoImg.src} alt="Capa do livro rei arthur" />
                </ContainerImg>
            </Container>

            <ContainerRe>
                <h1>Reelançamento</h1>

                <WrapperRe>
                    <div>
                        <p>Publicação: Livro físico</p>
                        <p>Evento de lançamento: Saraiva</p>
                        <p>Adicionais: Capa dura</p>
                        <p>Preço: R$ 39,99</p>
                    </div>
                </WrapperRe>

            </ContainerRe>

            <Footer />
        </>
    )
}