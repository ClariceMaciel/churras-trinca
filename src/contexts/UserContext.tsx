import { createContext, ReactNode, useContext, useReducer} from 'react';

type State = {
    email: string;
    password: string;
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode;
}

const initialData: State = {
    email: '',
    password: '',
}

// Context 
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setEmail,
    setPassword,
}

const formReducer = (state: State, action: Action) => {
    switch(action.type) {   
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setPassword:
            return {...state, password: action.payload};
        default:
            return state;
    }
}

// Provider
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error('useForm precisa ser udado dentro do FormProvider');
    }
    return context;
}