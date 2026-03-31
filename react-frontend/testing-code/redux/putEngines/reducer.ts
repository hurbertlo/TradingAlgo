import { PutEnginesActions } from "./action";
import { initialState,PutEnginesState } from "./state";

export function putEnginesReducer(
    state: PutEnginesState=initialState,
    action: PutEnginesActions,
):PutEnginesState{
    if(action.type==="@@putEngines/ADDPUTENGINE"){

    }else if(action.type==="@@putEngines/UPDATEPUTENGINE"){

    }else if(action.type==="@@putEngines/REMOVEPUTENGINE"){

    }else{
        return state
    }

    
}