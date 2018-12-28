import * as rxjs from 'rxjs';

const { Subject } = rxjs;

class PostponeSubject {
  constructor(postponeNumber) {
    this.postponeNumber = postponeNumber;
    this.observers = [];
    this.subject = new Subject();
  }

  subscribe(observer) {
    const obsObject = {
      observer,
      counter: 0,
    };
    this.observers.push(obsObject);
  }

  next(value) {
    this.subject.next(value);
    this.observers.forEach((obsObj) => {
      if (obsObj.counter < this.postponeNumber) {
        obsObj.counter++;
        obsObj.counter === this.postponeNumber && this.subject.subscribe(obsObj.observer);
        return;
      }
    });
  }
}

const myAwesomeSubject = new PostponeSubject(2);
myAwesomeSubject.subscribe(v => console.log('Sub1', v));
myAwesomeSubject.next(1);
myAwesomeSubject.next(2);
myAwesomeSubject.next(3); // Sub1 3
myAwesomeSubject.next(4); // Sub1 4
myAwesomeSubject.subscribe(v => console.log('Sub 2', v));
myAwesomeSubject.next(5); // Sub1 5
myAwesomeSubject.next(6); // Sub1 6
myAwesomeSubject.next(7); // Sub1 7, Sub2 7
myAwesomeSubject.next(8); // Sub1 8, Sub2 8