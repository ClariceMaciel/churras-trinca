import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const TableLine = styled.tr`
    position: relative;
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    border-bottom: 1px solid #E5C231;
    padding: 2px;
    
    input {
        position: absolute;
        width: 25px;
        height: 25px;        
        background: #FFFFFF;
        border: 3px solid #998220;
        margin-left: 20px;
        border-radius: 50%;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
    }

    input[type=checkbox]:checked + label:after{
        content: '';
        background-color: #FFD836;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: absolute;
        left: 22px;
        bottom: 4px;
    }

    label {
        color: rgba(0, 0, 0, 0.8); 
        margin-left: 60px;   
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 20px; 
    }

`;

export const TableColumn = styled.td`
    width: 300px;
`;

export const Value = styled.div(({done}:ContainerProps)=>(
`
    margin-left: 160px;    
    text-decoration: ${done ? 'line-through' : 'initial'};   
`
));

