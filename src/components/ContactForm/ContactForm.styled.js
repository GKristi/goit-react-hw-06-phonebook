import styled from 'styled-components';

export const Form = styled.form`
	padding: 0 20px;
`

export const FormInputContainer = styled.div`
 	display: flex;
 	flex-direction: column-reverse;
 	position: relative;
 	padding-top: 1.5rem;
`
export const InputLabel= styled.label`
 	color: #8597a3;
	margin-top: 20px;
`
export let InputField = styled.input`
    border: 0;
    z-index: 1;
    background-color: transparent;
    border-bottom: 2px solid #eee; 
    font: inherit;
    font-size: 1.125rem;
    padding: .25rem 0;
    &:focus, &:valid {
        outline: 0;
        border-bottom-color: #3aafa9;
    }
`

export const FormButton = styled.button`
	height: 40px;
    margin-top: 15px;
 	width: 100%;
 	background-color: #3aafa9;
 	border-radius: 6px;
 	color: #FFF;
 	border: 0;
	margin-bottom: 20px;
 	&:focus {
 		outline: 0;
 	}
    &:hover {
 		background-color: #2b7a78;
 	}
`