import styled from 'styled-components';

export const Container = styled.div`
    width: 588px;
    font-family: Raleway;
    padding-top: 125px;
    position: relative;
`;

export const HeadTitle = styled.div`
    position: absolute;
    width: 211px;
    height: 43px;
    left: 28px;
    top: 5px;

    h2 {
        font-weight: 800;
        font-size: 28px;
        line-height: 5px;
    }

    h3 {
        font-weight: bold;
        font-size: 36px;
        line-height: 2px;
        color: rgba(0, 0, 0, 0.8);
    }
`;

export const AreaPeople = styled.div`
    position: absolute;
    width: 105px;
    height: 25px;
    left: 450px;
    top: 31px;
    font-weight: 501;
    font-size: 21px;
    line-height: 10px;
`;

export const AreaMoney = styled.div`
    position: absolute;
    width: 104px;
    height: 25px;
    left: 450px;
    top: 70px;
    font-weight: 501;
    font-size: 21px;
    line-height: 10px;
`;