import { Route } from '@angular/router';

export default [
  {
    path: 'book-consultation',
    loadComponent: () => import('./booking-form/booking-form.component')
      .then(c => c.BookingFormComponent)
  }
] as Route[];
