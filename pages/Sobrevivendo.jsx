import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutBook from '../components/AboutBook';
import Relanca from '../components/Relanca';

import SobrevivendoImg from '../public/assets/SobrevivendoImg.jpg';

export default function Sobrevivendo() {
    return (
        <>
            <Head>
                <title>A carta</title>
            </Head>

            <Header />
            
            <AboutBook
                titulo = "Sobrevivendo no inferno"
                sinopse = "A principal obra do maior grupo de rap do Brasil agora publicada em livro, contundente como sempre e atual como nunca. Leitura obrigatória do vestibular da Unicamp. Na virada para os anos 1990, os Racionais MC’s emergiram como um dos mais importantes acontecimentos da cultura brasileira. Incensado pela crítica, o disco Sobrevivendo no inferno vendeu mais de um milhão e meio de cópias."
                autor = "Racionais Mcs"
                cor = "#a80a0a"
                imagem = {SobrevivendoImg.src}
            />

            <Relanca 
                publicacao = "Livro digital"
                evento = "Saraiva"
                adicionais = "Capa dura"
                preco = {39.99}
            />

            <Footer />
        </>
    )
}