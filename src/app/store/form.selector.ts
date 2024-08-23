import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FormState } from './form.reducer';

export const selectFormState = createFeatureSelector<FormState>('form');

export const selectSignInData = createSelector(
  selectFormState,
  (state: FormState) => state.signInData
);

export const selectSignUpData = createSelector(
  selectFormState,
  (state: FormState) => state.signUpData
);

export const selectSignUpStep2Data = createSelector(
  selectFormState,
  (state: FormState) => state.signUpStep2Data
);
