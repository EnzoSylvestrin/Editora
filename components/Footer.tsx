import { ContainerFooter } from "../styles/FooterStyled";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <ContainerFooter>
            <div className="group">
                <h1>
                    Grupo: Enzo Sylvestrin,
                    Luis Gualassi,
                    Bruna Delvecchio,
                    Julia Possani
                </h1>
            </div>
            <div className="copyright">
                <p>Design: <a href="https://enzosylvestrin.github.io/portifolio/" rel="noopener noreferrer" target="_blank">Enzo Sylvestrin</a></p>
            </div>
        </ContainerFooter>
    );
}