import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 600px;
  width: 1000px;
  margin: auto;
  margin-top: 50px;


  tr{
      display: flex;
      width: 995px;
      justify-content: space-between;
      align-items: center;
      text-align: center;

    
    &:nth-child(2){
        border-bottom: 1px solid #eee;
        height: 150px;
    }
    

      th{
           width: 100px;
           margin-top: 10px;
           color: #ccc;
      }

      td{
        width: 100px;

          img{
              width: 200px;
          }

          input{
              padding: 5px 10px;
              width: 30px;
              border: 1px solid #ccc;
              border-radius: 10px;

              :disabled{
                  background: transparent;
              }
          }

          svg{
            width: 50px;
            transition: 0.3s;

            &:hover{
                opacity: 0.3;
            }
          }
      }

    
  }

`;

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    button{
            padding: 10px 50px;
            border: 0;
            border-radius: 5px;
            background: #EC3951;
            color: #fff;
            font-size: 20px;
            margin-left: 10px;
            transition: 0.3s;

            &:hover{
                opacity: 0.8;
            }
        }

    div.total{
        display: flex;
        align-items: baseline;
        margin-right: 30px;

        small{
            color: #ddd;
            margin-right: 10px;
        }

        
    }
`