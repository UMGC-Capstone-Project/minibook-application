import {User} from '../model/User';
import { ActionReducerMap, createReducer, on, State } from '@ngrx/store';
import { AuthActions } from '../action-types';

export interface AuthState {
	user: User;
}

export const initialAuthState: AuthState = {
	user: undefined
};

// export const reducers: ActionReducerMap<AuthState> = {
//     authReducer
// };

export const authReducer = createReducer(
	initialAuthState,
	on(AuthActions.login, (state, action) => {
		return {
			user: action.user
		};
	}),
	on(AuthActions.logout, (state, action) => {
		return {
			user: undefined
		};
	})
);
