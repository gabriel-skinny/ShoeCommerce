import styled from 'styled-components';

export const Shoe = styled.div`
    
    display: flex;
    height: 250px;
    flex-direction: column;
    position: relative;
    padding: 20px;

    &.red{
        background-color: #EC3951;
    }
    &.purple{
        background: #B03B66;
    }
    &.cyan{
        background: #14353F;
    }

    img.logo{
        width: 50px;   
        transition: all 0.4s;
    }

    img.shoe{
        width:300px;
        height: 300px;
        background: transparent;
        position: absolute;
        top: -35px;
        left: 10px;
        transform: rotate(-45deg);
        
        transition: all 0.4s;  

        &:hover{
            transform: rotate(0deg);
            transform: translateY(60px)
        } 
    }

    &:hover img.logo{
        transform: scale(1.8)
    }

`;

export const Container = styled.div`
    height: 700px;
    width: 400px;
    margin-left: 50px;
    margin-top: 74px;
    
    > h1{
        font-size: 22px;
        font-weight: 400;
        
        padding-left: 10px;
        color: #fff;  
    
        &.red{
            border-left: 3px solid #EC3951;
        }
        &.purple{
            border-left: 3px solid #B03B66;
        }
        &.cyan{
            border-left: 3px solid #14353F;
        }
    }

    &:hover ${Shoe} img.shoe{
            transform: rotate(0deg);
            transform: translateY(60px)
        } 

    &:hover ${Shoe} img.logo{
        transform: scale(1.5);
    }
`;

export const Cards = styled.div`
    margin-top: 80px;
    width: 400px; 
`


export const Description = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
    height: 400px;
    background-color: #fff;

    div.title{
        h1{
        font-size: 24px;
        color: #000;  
    }

        h3{
            color: #BBBB;
            margin-top: 20px;  
        }
    }

    p{
        margin-top: 10px;  
        color: #888;
    }

    button{
        margin-top: 50px ;
        margin-bottom: 20px;
        border: 0;
        border-radius: 15px;
        background-color: #EC3951;
        color: #fff;
        padding: 10px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.1s; 

        &:hover{
           opacity: 0.8; 
        }
        &.red{
        background-color: #EC3951;
        }
        &.purple{
            background: #B03B66;
        }
        &.cyan{
            background: #14353F;
        }
    }
`;