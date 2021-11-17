import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../contexts/UserContext';
import * as C from './styles';
import { Item } from '../../types/Item';
import { Participant } from '../../types/Participant';
import { items } from '../../data/items';
import { participants } from '../../data/paticipants';
import { TableArea } from '../../components/TableArea';
import { TableItem } from '../../components/TableItem';


type Props = {
    listPart: Participant[];
    onChange: (id_person: number, done: boolean) => void
}

export const BbqDetail = ({ listPart, onChange }: Props) => {
    const [listP, setlistP] = useState(listPart);
    const [list, setlist] = useState(items);

    const handleTakChange = (id_person: number, done: boolean) => {
        let newList = [...listPart];
        for(let i in newList){
          if(newList[i].id_person === id_person){
            newList[i].done = done;
          }
        }
        setlistP(newList);
      }

    return (
        <C.Container>
            <C.CardBox>
                <C.Table>
                    <thead>
                        <tr>
                            <TableArea list={list} />                 
                        </tr>
                    </thead>
                    <tbody>
                        {listPart.map((participants, index)=>(
                            <TableItem 
                                key={index} 
                                listPart={participants} 
                                onChange={handleTakChange}
                            />
                        ))}                        
                    </tbody>
                </C.Table>
            </C.CardBox>
        </C.Container>
    );
}