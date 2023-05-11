import styled from "styled-components";

export const HomeContainer = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`

export const EditContainer = styled.section`
    background-color: #16151E;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;

    border-radius: 8px;
    padding: 2.5rem;
    min-height: 10.5rem;
    height: 100%;
    min-width: 26.875rem;
    width: 100%;

    div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        h2 {
            font-size: 1.25rem;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            button {
                background: transparent;
                border: 0;
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
`

export const FormContainer = styled.form`
    background: #24243D;
    width: 100%;
    padding: 1rem 1.5rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border-radius: 8px;

    input {
        background: transparent;
        border: 0;
        outline: none;
        flex: 1;
        font-size: 0.75rem;
    }
`

export const ListContainer = styled.section`
    background: #1f1f33;

    padding: 3rem 2.5rem;
    min-width: 26.875rem;
    width: 100%;
    overflow: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3.5rem;
`

export const ContactVariant = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

    section {
        gap: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
    }
`

export const Category = styled.div`
    height: 3.25rem;
    max-width: 3.25rem;
    width: 100%;
    background-color: blue;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.25rem;
`

export const ContactContent = styled.div`      
    max-width: 13rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.25rem;

    img {
        border-radius: 50%;
    }

    div {
        gap: 0.5rem;
        width: 100%;
        word-break: break-all;
    }
`