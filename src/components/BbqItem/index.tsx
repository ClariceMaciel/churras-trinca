import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/UserContext';
import * as C from './styles';
import { formatDate } from '../../helpers/date';
import { ReactComponent as IconMoney} from '../../svgs/icon_money.svg';
import { ReactComponent as IconPeople} from '../../svgs/icon_people.svg';
import { items } from '../../data/items';

type Props = {
    id: number;
    date: Date;
    title: string;
    participant: number;
    value: number;
}

export const BbqItem = ({ id, date, title, participant, value }: Props) =>{
    const history = useHistory();
    //const { state, dispatch } = useForm();
    
    //useEffect(() => { 
       // dispatch({
        //    type: FormActions.setId_bbq,
          //  payload: `${id}`
      //  });
   // }, []);

    const handleItemClick = (id: number) => { 
        history.push('/ItemDetail/${id}');
    }
    
    return (
        <C.Container> 
                <h1 onClick={()=>handleItemClick(id)}>{formatDate(date)}</h1>    
                <h2 onClick={()=>handleItemClick(id)}>{title}</h2>
                <C.AreaPeople>
                    <IconPeople width={18} height={15.3} /> {participant}                
                </C.AreaPeople>
                <C.AreaMoney>
                    <IconMoney width={20} height={20} /> R${value}                             
                </C.AreaMoney>   
        </C.Container>
    );
}