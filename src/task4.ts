import { Observable, of } from 'rxjs';

//input data
const inputString = of('AbcdEFGGG');

const switchCases = () => (source: Observable<any>) =>
  new Observable(observer => {
    return source.subscribe({
      next(inputString:string) {

        let i = 0;
        let character = '';
        let reverseCaseArray = [];
        while (i <= inputString.length - 1){
            character = inputString.charAt(i);

                if (character == character.toUpperCase()) {
                    let changeCase = character.toLowerCase();
                    reverseCaseArray.push(changeCase);
                    
                } else {
                    let changeCase = character.toUpperCase();
                    reverseCaseArray.push(changeCase);
                }
            i++;
        }

        const finalResultString = reverseCaseArray.toString().trim();

        observer.next(
            finalResultString
        );
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    });
  });

  inputString
    .pipe(switchCases()).subscribe(console.log);