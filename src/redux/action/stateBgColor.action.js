
export function setBGColorState(color){
    return async function (dispatch){
        dispatch({type:'set_bg_color', payload: color})
    }
}

