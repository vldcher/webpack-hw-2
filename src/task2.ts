import * as _ from 'lodash';
import { map, share, switchMap } from 'rxjs/operators';
import { Observable, pipe, interval, defer, from, of } from 'rxjs';

// Operator
const makeRandomSymbols = () => map(x =>
    x
);

// Usage
const randomSymbol = from(Math.random().toString(36).substr(2, 1));

// interval(1000).pipe(makeRandomSymbols()).subscribe(console.log);


// Long Version

const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Operator
const qwe = () => (source: Observable<any>) =>
  new Observable(observer => {
    return source.subscribe({
      next(x) {
        observer.next(
          x.toUpperCase()
        );
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    });
  });

  from(possible.charAt(Math.floor(Math.random() * possible.length)))
    .pipe(qwe()).subscribe(console.log);