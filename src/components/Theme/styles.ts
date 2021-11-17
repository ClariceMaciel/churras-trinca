import styled from 'styled-components';

export const Container = styled.div`
    padding-bottom: 80px;  
    min-height: 100vh;    
    background-color: #FFD836;
    position: relative;
`;

export const PatternArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0px;
    margin: 0 auto;
`;

export const Page = styled.div`
    position: relative;
`;

export const IconArea = styled.div<{color?: string}>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: ${props => props.color ?? '#FAFAFA'};
    padding-bottom: 100px;
    padding-top: 40px;
    position: relative;
`;

