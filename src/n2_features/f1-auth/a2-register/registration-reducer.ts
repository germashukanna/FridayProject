

export const registrationReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        default:
            return state
    }
}


// Actions
export const registrationAC = () => {
    return {type: '',} as const
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
export type ActionType = ReturnType<typeof registrationAC>


type initialStateType = {
    isLoggedIh: boolean
}

const initialState: initialStateType = {
    isLoggedIh: false
}