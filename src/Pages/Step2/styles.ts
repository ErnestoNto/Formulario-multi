import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    h2{
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
    }

    span{
        font-size: 1.1rem;
        font-weight: bold;
        display: block;
    }

    input{
        margin-top: 20px;
        padding: 15px;
        font-size: 1.2rem;
        border: 0;
        border-radius: 10px;
        outline: 0;
        width: 300px;
        display: block;
    }
    
    a{
        padding: 10px;
        font-size: 1.2rem;
        outline: 0;
        width: 200px;
        color: #fafafa;
    }

    button{
        margin-top: 10px;
        padding: 10px;
        font-size: 1.2rem;
        outline: 0;
        width: 200px;
        border-radius: 20px;
        border: 0;
        cursor: pointer;
        background-color: #3F88C5;
        color: #fafafa;
    }
`