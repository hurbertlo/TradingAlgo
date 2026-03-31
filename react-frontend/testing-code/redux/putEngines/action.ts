export function addPutEngine(){
    return{
        type:"@@putEngines/ADDPUTENGINE" as const
    }
}

export function updatePutEngine(){
    return{
        type:"@@putEngines/UPDATEPUTENGINE" as const
    }
}

export function removePutEngine(){
    return{
        type:"@@putEngines/REMOVEPUTENGINE" as const
    }
}
export type PutEnginesActions =ReturnType<typeof addPutEngine>|
                                ReturnType<typeof updatePutEngine>|
                                ReturnType<typeof removePutEngine>