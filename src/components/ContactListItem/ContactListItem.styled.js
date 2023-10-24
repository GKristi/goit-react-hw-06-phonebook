import styled from "styled-components";

export const ContactItem = styled.li`
    display: flex;
    height: 40px;
    align-items: center;
	gap: 10px;
    background-color: #def2f1;
    border-radius: 20px;
    margin-top: 10px;
    padding: 10px;

`
export const ContactTextName = styled.p`
    text-align: start;
	color: #3aafa9;
`
export const ContactTextNumber = styled.p`
	font-size: smaller;
	color: #3aafa9;
`

export const ContactDeleteBtn = styled.button`
	height: 30px;
	margin-left: auto;
 	background-color: #3aafa9;
 	border-radius: 6px;
 	color: #FFF;
 	border: 0;
 	&:focus {
 		outline: 0;
 	}
    &:hover {
 		background-color: #2b7a78;
 	}
`