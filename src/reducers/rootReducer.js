import person from "../Componest/Person/Person";

const initialState = {
    persons: []
};

function rootReducer(state =initialState, action) {
    switch (action.type) {
        case 'ADD_PERSON':
            const newPerson= {
                id:Math.random(),
                name:'subbu',
                age:Math.floor(Math.random()*40)
            }
            return{
                ...state,
                persons:state.persons.concat(newPerson)
            }
        case 'REMOVE_PERSON':
            console.log('action.personId',action.personId)
            return {
                ...state,
                
                persons:state.persons.filter(person=>person.id !== action.personId)
            }
    }
    return state;
}

export default rootReducer;