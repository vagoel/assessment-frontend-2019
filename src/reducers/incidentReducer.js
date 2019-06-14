
const incidentReducer = (state = [], action) => {
    switch (action.type) {
        case 'new':
            return [...state, {
                name: action.name,
                assignee: action.assignee,
                status: action.status,
                id: Date.now()
            }];
        default:
            return state;
    }
}


export default incidentReducer;
