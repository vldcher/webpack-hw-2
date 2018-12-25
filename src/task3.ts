import { Observable, of } from 'rxjs';

const inputString = of('abcdefg q sf kkk');

const filterString = 'ace b kk';

const qwe = (filterString) => (source: Observable<any>) =>
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
            const finalResultString = filteredArray.toString();

        observer.next(
            finalResultString
        );
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    });
  });

  inputString
    .pipe(qwe(filterString)).subscribe(console.log);

















    

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