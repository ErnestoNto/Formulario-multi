import styled from "styled-components";

export const Container = styled.div<{active: boolean}>`
    padding: 10px;
    border: 2px solid ${props => props.active ? `#CC59D2` : `#9DA9A0`};
    margin: 10px 0;
    max-width: 400px;

    h3, span{
        display: inline;
        font-size: 1.5rem;
    }

    &:hover{
        border-color: #C17817;
    }
`