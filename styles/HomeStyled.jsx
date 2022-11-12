import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    min-height: 100vh;
    background-color: #614014;
    display: flex;
    padding-top: 10vh;
`

export const Description = styled.div`
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--textColor);
    font-size: 20px;
`

export const ContainerImg = styled.div`
    width: 45%;
    position: relative;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 320px;
        height: 450px;
        border-shadow: 0 0 10px 20px s
    }
`

