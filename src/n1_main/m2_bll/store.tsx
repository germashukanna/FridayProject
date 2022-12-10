import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "../../n2_features/f1-auth/a1-login/login-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer} from "./app-reducer";


const rootReducer = combineReducers({
    login: loginReducer,
    appRed: appReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>
// type AppActionType = TodolistDomainType
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент


export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    AnyAction>

// @ts-ignore
window.store = store;