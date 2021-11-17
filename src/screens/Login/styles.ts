import styled from 'styled-components';
import '../../index.css';

export const Container = styled.div`
    background-image: linear-gradient( rgb(255,216,54,0) 20%,rgb(255,216,54) 50%); 
    min-height: 90vh;

    p {
        display: block; 
        color: rgba(0, 0, 0, 0.8);
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 25px; 
        margin-bottom: 12px;
        margin-top: 27px;
    }

    label {
        display: block;
        margin-bottom: 30px;        

        input {
            display: block;
            margin-top: 4px;
            box-sizing: border-box;
            width: 282px;
            height: 50px;
            padding: 10px;
            outline: 0;
            font-size: 18px;
            background-color: #FFFF;
            border: 2px solid #FFFF;    
            border-radius: 2px;

            ::placeholder {
                font-style: italic;
                font-family: Raleway;
                font-size: 18px;
            }
        }

    }   

    button { 
        position: absolute;
        background-color: #000;
        color: #FFF;
        font-size: 17px;
        font-weight: bold;
        width: 282px;
        height: 50px;
        border: 0;
        border-radius: 18px;
        cursor: pointer;
        margin-top: 50px;

        &:hover {
            opacity: .9;
        }
    }

`;

export const Area = styled.div`
    margin: auto;
    max-width: 275px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 70px;
    padding-bottom: 60px;
    text-align: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 38px;
`;
