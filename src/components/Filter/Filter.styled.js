import styled from "styled-components";

export const FilterInputContainer = styled.div`
 	display: flex;
 	flex-direction: column-reverse;
 	padding-top: 1.5rem;
`

export const FilterInputLabel= styled.label`
 	color: #8597a3;
	margin-top: 20px;
`
export let FilterInput = styled.input`
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid #eee; 
    font: inherit;
    font-size: 1.125rem;
    padding: .25rem 0;
    &:focus, &:valid {
        outline: 0;
        border-bottom-color: #79AC78;
    }
`