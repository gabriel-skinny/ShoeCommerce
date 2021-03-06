import styled from 'styled-components';

export const Container = styled.div`
    height: 100px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        margin-left: 50px;
    }

    ul{
        display: flex;
        list-style: none;
        margin-right: 100px;

        li, a{
            margin-left: 40px;
            font-size: 20px;
            color: #000;
            text-decoration: none;

            &:hover{
                border-bottom: 3px solid #000;
            }

            &.cart{
                display: flex;
                align-items: center;
            }

            svg{
                margin-left: 5px;
                margin-top: 5px;
            }
        }
    }
`;

export const Dot = styled.div`
    position: absolute;
    top: 32px;
    right: 330px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #ff892e;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;