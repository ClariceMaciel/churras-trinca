import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { Item } from '../../types/Item';
import { Participant } from '../../types/Participant';
import { items } from '../../data/items';
import { participants } from '../../data/paticipants';
import { BbqDetail } from '../../components/BbqDetail';


export const ItemDetail = () => {
    const history = useHistory();            
    const [listPart, setListPart] = useState(participants);
    
    const handleSignClick = () => { 
        history.push('/ItemList');
    }   

    const handlePartChange = (id_person: number, done: boolean) => {
        let newList = [...listPart];
        for (let i in newList){
            if(newList[i].id_person === id_person){
                newList[i].done = done;
            }
        }
        setListPart(newList);
    }
    
    return (
        <Theme>
            <C.Header onClick={handleSignClick}>Agenda de Churras</C.Header>
            <C.Container>
                <BbqDetail  listPart={participants} onChange={handlePartChange}/>                
            </C.Container>
        </Theme>
    );
}