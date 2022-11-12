import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    padding: 5px 0;
    overflow-y: hidden;
    width: 100%;
    min-height: 65px;
    height: 12vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #0f0e0e;

    
    .group {
        margin-left: 20px;
        font-size: 8px;
        color: #fff;
    }

    .copyright {
        color: #fff;
        font-size: 17px;
        transition: all 0.4s ease;
        margin-right: 20px;

        a {
            color: #10c9d6;
            text-decoration: none;
            transition: all 0.2s ease;
        }

        :hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: 800px) {
        text-align: center;

        .group {
            width: 100%;
            margin: 0px 5px;
            margin-bottom: 10px;
        }

        .copyright {
            width: 100%;
        }
    }

`