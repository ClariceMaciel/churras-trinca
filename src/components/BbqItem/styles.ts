import styled from 'styled-components';
import '../../index.css';

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 282px;
    height: 192px;
    left: 24px;
    top: 156px; 
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
    border-radius: 2px;
    font-family: Raleway;
    font-style: normal;
    
    h1,h2 {
        margin-left: 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.9;
        }
    }

    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 21px;
        color: rgba(0, 0, 0, 0.8);
    }
`;

export const AreaPeople = styled.div`
    position: absolute;
    margin-left: 20px;
    margin-top: 30px;
    font-weight: 550;
    font-size: 21px;
    line-height: 25px;
`;

export const AreaMoney = styled.div`
    position: absolute;
    margin-left: 170px;
    margin-top: 30px;
    font-weight: 550;
    font-size: 21px;
    line-height: 25px;
`;
