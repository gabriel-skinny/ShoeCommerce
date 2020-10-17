import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap');
    
    *{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: context-menu;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        font-family: 'Oswald';
    }

    body{
    background: linear-gradient(#2c363a 50%, #F7F6F6 50%);
    width: 1440px;
    margin: auto;
    height: 100vh;
}
`