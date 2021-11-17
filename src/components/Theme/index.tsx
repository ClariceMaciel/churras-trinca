import { ReactNode } from 'react';
import { useForm } from '../../contexts/UserContext';
import * as C from './styles';
import { ReactComponent as LogoIcon} from '../../svgs/logo.svg';
import { ReactComponent as BbqPattern} from '../../svgs/bbq_pattern.svg';

type Props = {
    children: ReactNode;
    color?: string;
    heitgh?: number;
}

export const Theme = ({children, color, heitgh}: Props) => {
    const { state } = useForm(); 

    return (
        <C.Container>
                <C.PatternArea>                 
                    <BbqPattern 
                        width="50%"
                        height="400px"
                        viewBox="0 0 650 10" 
                        style={{overflow:'visible', position:'relative'}}
                    />
                    <BbqPattern 
                        width="50%"
                        height="400px"
                        viewBox="-20 0 650 10" 
                        style={{overflow:'visible'}}
                    />                               
                </C.PatternArea>
                <C.Page>
                       {children}
                </C.Page>
            <C.IconArea color={color}>
                    <LogoIcon  width="48px" height="48px"/>
            </C.IconArea>            
        </C.Container>
    );
}