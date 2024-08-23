import { createAction, props } from '@ngrx/store';

export const updateSignInData = createAction(
  '[Sign In] Update Sign In Data',
  props<{ emailOrPhone: string; password?: string }>()
);

export const updateSignUpData = createAction(
  '[Sign Up] Update Sign Up Data',
  props<{ name: string; password: string }>()
);

export const updateSignUpStep2Data = createAction(
  '[Sign Up] Update Step 2 Data',
  props<{ organization: string; designation: string; birthdate: string; city: string; pincode: string }>()
);
