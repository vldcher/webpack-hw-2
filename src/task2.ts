import { switchMap } from 'rxjs/operators';
import { interval, of } from 'rxjs';

// random string
// const randomSymbol = from(Math.random().toString(36).substr(2, 1));

// Long Version

const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let source = interval(1000);

let makeRandomSymbols = source.pipe(
  switchMap(
    () => of(possible.charAt(Math.floor(Math.random() * possible.length)))
  )
);

makeRandomSymbols.subscribe(val => console.log(val));