import { createReducer, on } from '@ngrx/store';
import * as FormActions from './form.action';

export interface FormState {
  signInData: {
    emailOrPhone: string;
    password?: string;
  };
  signUpData: {
    name: string;
    password: string;
  };
  signUpStep2Data: {
    organization: string;
    designation: string;
    birthdate: string;
    city: string;
    pincode: string;
  };
}

export const initialState: FormState = {
  signInData: { emailOrPhone: '' },
  signUpData: { name: '', password: '' },
  signUpStep2Data: { organization: '', designation: '', birthdate: '', city: '', pincode: '' }
};

export const formReducer = createReducer(
  initialState,
  on(FormActions.updateSignInData, (state, { emailOrPhone, password }) => ({
    ...state,
    signInData: { emailOrPhone, password }
  })),
  on(FormActions.updateSignUpData, (state, { name, password }) => ({
    ...state,
    signUpData: { name, password }
  })),
  on(FormActions.updateSignUpStep2Data, (state, data) => ({
    ...state,
    signUpStep2Data: { ...state.signUpStep2Data, ...data }
  }))
);

export const reducers = {
  form: formReducer
};
