import React, { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { items } from '../../data/items';
import { Theme } from '../../components/Theme';
import { BbqItem } from '../../components/BbqItem';
import { ReactComponent as IconBbq } from '../../svgs/icon_bbq.svg';


export const ItemList = () => {

    const [list, setList] = useState(items);

    return (
        <Theme>
            <C.Header>Agenda de Churras</C.Header>
            <C.Container>
                <C.Area>
                    <C.BbqList>
                        {items.map((item, index)=>(    
                            <BbqItem key={index} id={item.id} date={item.date} title={item.title} participant={item.participant} value={item.value}/>
                        ))}
                        <C.AddBbq>
                            <C.AreaIcon>
                                <IconBbq width={40} height={44} /> 
                            </C.AreaIcon>
                            <h3>Adicionar Churras</h3>                          
                        </C.AddBbq>
                    </C.BbqList>
                </C.Area>
            </C.Container>
        </Theme>
    );
}