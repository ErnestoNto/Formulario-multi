import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #140F2D;
    color: #fafafa;
`

export const Header = styled.header`
    width: 100%;
    padding: 20px 10px;
    height: 200px;

    @media screen and (max-width: 750px) {
        height: 150px;
    }

    h1{
        font-size: 2.5rem;
    }
`

export const Area = styled.div`
    max-width: 980px;
    margin: 0 auto;
`

export const Steps = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

export const Sidebar = styled.aside`
    width: 250px;
`

export const Page = styled.section`
    flex: 1;
`