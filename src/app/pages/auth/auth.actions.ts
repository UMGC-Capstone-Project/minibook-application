import { createAction, props } from '@ngrx/store';
import {User} from './model/User';

export enum AuthActionTypes {
	LOGIN_START = `[AUTH] USER LOGIN`,
	LOGIN_SUCCESS = `[AUTH] LOGIN SUCCESS`,
	LOGIN_FAIL = `[AUTH] LOGIN FAIL`,
	LOGOUT = `[AUTH] LOGOUT FAIL`,
	SIGNUP_START = `[AUTH] SIGNUP START`,
	SIGNUP_SUCCESS = `[AUTH] SIGNUP SUCCESS`
}

// export const loginStart = createAction(AuthActionTypes.LOGIN_START, props<{ email: string; password: string }>());
export const login = createAction(AuthActionTypes.LOGIN_START, props<{user: User}>());
export const logout = createAction(AuthActionTypes.LOGOUT);
