import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #585858;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #fff;
    max-width: 450px;
    padding: 6px;
    border-radius: 5px;
`

export const Row = styled.div`
    display: flex;
    fle-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    fle-direction: column;
    justify-content: space-between;
    align-items: center;
`