const initialState = [
    {
       id:0,
       name:"Bill Cowl",
       email:"billc@email.com",
       phone: 1234567890,
       address:"123 Main St.",
    },
    {
        id:1,
        name:"Jane Numb",
        email:"jnumb@email.com",
        phone: 9876543210,
        address:"000 Blvd Ct."
    },
    {
        id:2,
        name:"Ann Cobble",
        email:"ann777@email.com",
        phone: 1111111111,
        address:"Township, USA"
    },
];

const studentReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_STUDENT": 
            state = [...state, action.payload];
            return state;
        case "UPDATE_STUDENT":
            const updateState = state.map(student => student.id === action.payload.id ? action.payload : student)
            state = updateState
            return state;
        case "DELETE_STUDENT":
            const filterStudents = state.filter(student => student.id !== action.payload ? student : null)
            state = filterStudents
            return state
        default:
            return state;
    }
}

export default studentReducer;