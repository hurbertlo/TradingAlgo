export function addCallEngine(){
    return{
        type:"@@callEngines/ADDCALLENGINE" as const
    }
}

export function updateCallEngine(){
    return{
        type:"@@callEngines/UPDATECALLENGINE" as const
    }
}

export function removeCallEngine(){
    return{
        type:"@@callEngines/REMOVECALLENGINE" as const
    }
}
export type CallEnginesActions =ReturnType<typeof addCallEngine>|
                                ReturnType<typeof updateCallEngine>|
                                ReturnType<typeof removeCallEngine>