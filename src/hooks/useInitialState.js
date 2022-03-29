import {useState} from 'react';

const initialState = {
    dataUser: [] 
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const updateDataUser = (data) => {

        setState(data);
    }

    return {state, updateDataUser};
};

export default useInitialState;