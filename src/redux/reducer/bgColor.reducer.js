
const bgColorReducer = (state='', action)=>{
    switch(action.type){
        case 'set_bg_color':
            return action.payload
        default:
            return state
    }
}

export default bgColorReducer
