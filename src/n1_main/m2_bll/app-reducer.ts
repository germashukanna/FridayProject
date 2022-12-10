

export const appReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        default:
            return state
    }
}


// Actions
export const setAppIsInitializedAC = (value: boolean) => {
    return {type: 'app/SET-INITIALIZED', value} as const
}

//Thunks
//     export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionType>) => {
//         dispatch(setAppStatusAC("loading"))
//         authAPI.login(data)
//             .then((res) => {
//                 if (res.data.resultCode === 0) {
//                     dispatch(setIsLoggedIhAC(true))
//                     dispatch(setAppStatusAC("succeeded"))
//                 } else {
//                     handleServerAppError(res.data, dispatch)
//                 }
//             })
//             .catch((error: AxiosError) => {
//                 handleServerNetworkError(error.message, dispatch)
//             })
//     }

//Types
    export type ActionType = ReturnType<typeof setAppIsInitializedAC>


    type initialStateType = {
        isInitialized: boolean
    }

    const initialState: initialStateType = {
        isInitialized: false
    }