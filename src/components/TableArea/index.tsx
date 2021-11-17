import * as C from './styles';
import { Item } from '../../types/Item';
import { items } from '../../data/items'
import { formatDate } from '../../helpers/date';
import { ReactComponent as IconMoney} from '../../svgs/icon_money.svg';
import { ReactComponent as IconPeople} from '../../svgs/icon_people.svg';


type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
 
    return (
        <C.Container>
            <C.HeadTitle>
                <h2>01/12</h2>
                <h3>Niver do Gui</h3>
            </C.HeadTitle>
                <C.AreaPeople>
                    <IconPeople /> 15
                </C.AreaPeople>
                <C.AreaMoney>
                    <IconMoney/> R$ 280
                </C.AreaMoney>                  
        </C.Container>
    );
}