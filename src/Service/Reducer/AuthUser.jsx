import { ActionTypes } from "../Action/ActioType"


const intialstate = {

    loginuser:{}
}

export const UseAuthorization = (state = intialstate,action)=>{
        switch(state.type){
            case ActionTypes.LoginUsers:
                return {
                    ...state,
                    loginuser : action.payload
                }

            default :
            return state;
        }
}