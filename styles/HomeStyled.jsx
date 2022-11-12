import styled, { css } from 'styled-components';

export const Container = styled.section`
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
    color: var(--textColor);

    h1 {
        font-size: 20px;
        marin-bottom: 2px;
    }

    p {
        color: var(--textColorLight) !important;
        font-size: 17px;
        margin-bottom: 10px;
    }

    span {
        font-size: 18px;
        padding: 0 50px;
        margin-bottom: 10px;
    }

    div {
        background-color: var(--bgColorLight);
        padding: 0 15px;
        margin-bottom: 10px;
    }

    h2 {
        color: var(--textColorLight) !important;
        font-size: 16px;
        margin: 10px 0;
    }

    h3 {
        color:  #805318;
        font-size: 19px;
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 25px;
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

    ::selection {
        background-color: transparent;
        color: #fff;
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

export const ContainerComments = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--bgColor);
    padding: 2rem 0;

    .title {
        margin-bottom: 15px;
        text-align: center;
        width: 100%;
        font-size: 26px;
        color: var(--textColor);
    }

`

export const SingleComment = styled.div`
    width: 70%;
    border-top: 1px solid #e8e8e8;
    padding: 25px 0;
    margin: 5px 0;
    color: var(--textColor);

    ${props => props.last && css`
        border-bottom: 1px solid #e8e8e8;
    `}

    h1 {
        font-size: 21px;
        margin-bottom: 12px;
    }

    p {
        font-size: 17px;
        color: var(--textColorLight) !important;
        margin-bottom: 12px;
    }

    span {
        font-size: 19px;
    }

    @media (max-width: 400px) {
        width: 85%;
    }

    
`