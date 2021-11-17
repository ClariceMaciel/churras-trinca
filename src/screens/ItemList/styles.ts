import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FAFAFA; 
    min-height: 63vh;
    margin-top: 30px;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    background-color: #FAFAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const BbqList = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 320px;
`;

export const AddBbq = styled.form`
    background-color: #F1F1F1;
    text-align: center;
    justify-content: center; 
    border-radius: 2px;   
    cursor: pointer;

    h3 {
        font-family: Raleway;
        font-style: normal;
        margin-top: 130px;
        font-size: 21px;
    }

    &:hover {
        opacity: 0.9;
    }
`;

export const AreaIcon = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #FFD836;  
    margin-left: 95px;
    margin-top: 35px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;    
`;
