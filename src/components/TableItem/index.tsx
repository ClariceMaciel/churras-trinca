
import * as C from './styles';
import { Participant } from '../../types/Participant';
import { participants } from '../../data/paticipants';
import { useState } from 'react';

type Props = {
    listPart: Participant;
    onChange: (id_person: number, done: boolean) => void
}

export const TableItem = ({ listPart, onChange }: Props) => {
    const [isChecked, setIsChecked] = useState(listPart.done);

    return (
        <C.TableLine>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />                
                <label>
                    <C.TableColumn>{listPart.name}</C.TableColumn>
                    <C.TableColumn>
                        <C.Value done={isChecked}>
                            R$ {listPart.value},00
                        </C.Value>
                    </C.TableColumn>
                </label>      
        </C.TableLine>
    );
}