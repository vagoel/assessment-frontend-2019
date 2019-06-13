
const incidentReducer = (state = [], action) => {
    switch (action.type) {
        case 'new':
            return [...state, {
                name: action.name,
                assignee: action.assignee,
                status: action.status
            }];
        default:
            return state;
    }
}


export default incidentReducer;
