import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background-color: var(--bgColor);
    display: flex;
    padding-top: 10vh;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        flex-direction: column-reverse;
    }
`

export const Description = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h1 {
        color: var(--textColor);
        font-size: 20px;
        marin-bottom: 2px;
    }

    p {
        color: var(--textColorLight);
        font-size: 17px;
        margin-bottom: 10px;
    }

    span {
        font-size: 18px;
        color: var(--textColor);
        padding: 0 50px;
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`

export const Mainbtn = styled.a`
    padding: 8px;
    background-color: var(--red);
    color: #fff;
    font-size: 18px;
    border-radius: 8px;
    transition: transform 0.3s ease;

    :hover {
        transform: scale(1.05);
        background-color: #d10909;
    }

    
`

export const ContainerImg = styled.div`
    width: 50%;
    position: relative;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        height: 450px;
        box-shadow: 0 20px 30px 0 var(--shadow);
    }

    img::selection {
        background-color: transparent;
    }

    @media (max-width: 768px) {
        img {
            width: 260px;
            height: 350px;
        }
    }

    @media (max-width: 600px) {
        width: 100%;

        img {
            position: static;
            display: block;
            margin: 0px auto;
            margin-bottom: 40px;
            width: auto;
            height: 320px;
            transform: translate(0,0);
        }
    }
`