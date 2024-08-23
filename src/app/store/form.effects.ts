import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as FormActions from './form.action';

@Injectable()
export class FormEffects {
  constructor(private actions$: Actions) {}

  // Define your effects here if you want to handle async operations, such as API calls
}
