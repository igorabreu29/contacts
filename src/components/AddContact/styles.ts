import styled from "styled-components";

export const FormAdd = styled.form`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    background-color: #16151E;

    padding: 2.5rem;
    border-radius: 4px;
    max-width: 28rem;
    width: 100%;

    div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 0.25rem;
        width: 100%;

        input {
            padding: 0.5rem 1rem;
            background-color: #24243D;
            width: 100%;
            height: 2.5rem;
            border: 0;
            border-radius: 4px;
            outline: none;
        }
    }

    button {
        width: 100%;
        background-color: transparent;
        border: 2px solid #24243D;
        border-radius: 4px;
        height: 2.5rem;
    }
`