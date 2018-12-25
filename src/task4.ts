import { Observable, from } from 'rxjs';

// Long Version
// const pow = (n: number) => (source: Observable<any>) =>
//   new Observable(observer => {
//     return source.subscribe({
//       next(x) {
//         observer.next(

//         );
//       },
//       error(err) { observer.error(err); },
//       complete() { observer.complete(); }
//     });
//   });