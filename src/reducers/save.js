const saved = (state = [], action) => {
    switch (action.type) {
        case 'SAVE':
            return [
                ...state,
                action.save
            ]
        default:
            return state;
    }
}

export default saved;