import Head from "next/head";

import { Container, ContainerImg, ContainerRe, Description, WrapperRe} from "../styles/HomeStyled";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBook from '../components/AboutBook';
import Relanca from '../components/Relanca';

import ACartaImg from '../public/assets/ACartaImg.jpg';

export default function ACarta() {
    return (
        <>
            <Head>
                <title>A carta</title>
            </Head>

            <Header />

            <AboutBook
                titulo = "A Carta"
                subtitulo = "De pero vaz de caminha"
                sinopse = "Escrita por Pero (Pedro) Vaz de Caminha (1450 – 1500), fidalgo português e escrivão oficial da esquadra de Pedro Álvares Cabral (1467 – 1520), a Carta é um dos documentos mais importantes da história dos descobrimentos portugueses. Em 1500, Caminha foi nomeado escrivão da feitoria a ser erguida em Calicute, na índia, razão pela qual se encontrava na nau capitânia da armada de Cabral naquele mesmo ano, quando a mesma encontrou o Brasil."
                autor = "Pero vaz de caminha"
                cor = "#061db3"
                imagem = {ACartaImg.src}
            />

            <Relanca 
                publicacao = "Livro digital"
                preco = {29.99}
            />

            <Footer />
        </>
    )
}