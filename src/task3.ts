import { Observable, of, from } from 'rxjs';
import { switchCases } from './task4';

//input data
const inputString = of('aBcd eF gS f kkk');

const filterString = 'ace b k k';

const myFilter = (filterString) => (source: Observable<any>) =>
  new Observable(observer => {
    return source.subscribe({
      next(inputString) {

            let initArray = inputString.split('')
            let filterArray = filterString.split('');
            let filteredArray = [];

            for (let i = 0; i < initArray.length; i++) {
                if (filterArray.indexOf(initArray[i]) === -1) {
                    filteredArray.push(initArray[i]);
                }
            }
            const finalResultString = filteredArray.join('');
            console.log(finalResultString);

        observer.next(
            finalResultString
        );
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    });
  });

  inputString
    .pipe(myFilter(filterString), switchCases()).subscribe(console.log);

















    

// const inputString = 'abcdefg q sf kkk';

// const filterString = 'ace b kk';

// console.log('input string:',inputString);
// console.log('filter string:', filterString);

// function myFilter(inputString:string, filterString:string) {

//     let initArray = inputString.split('')
//     let filterArray = filterString.split('');
//     let filteredArray = [];

//     for (let i = 0; i < initArray.length; i++) {
//       if (filterArray.indexOf(initArray[i]) === -1) {
//         filteredArray.push(initArray[i]);
//       }
//     }
//     const finalResultString = filteredArray.toString();
//     console.log('result:', finalResultString);
//   }
  
// myFilter(inputString, filterString);