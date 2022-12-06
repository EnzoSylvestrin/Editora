import Head from 'next/head';

import AboutBook from '../components/AboutBook';
import Relanca from '../components/Relanca';
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

      <AboutBook
        titulo = "Rei Arthur"
        subtitulo = "E os cavaleiros da távola redonda"
        sinopse = "O livro relata as batalhas de Arthur com o Cavaleiro Negro e com o Duque da Nortúmbria, e seus esforços para manter consigo a mágica Excalibur; seu amor por Lady Guinevere e as origens da Távola Redonda; Merlin, traído pela feiticeira Vivien, além de Morgana e a Dama do Lago; Sir Pellias, Sir Gawaine e tantos outros nobres cavaleiros. E, ao fim, vê-se formulado o enigma de cuja resposta depende a vida de Arthur..."
        autor = "Howard Pyle"
        cor = "#805318"
        imagem = {ReiArthur.src}
      />

      <Relanca 
        publicacao = "Livro digital"
        Adicionais = "Chaveiro com espada"
        preco = {34.99}
      />

      <Footer />
    </>
  )
}
