import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/distinctuntilchanged

// only output distinct values, based on the last emitted value
const source$ = from([
  { name: 'Brian' },
  { name: 'Joe' },
  { name: 'Joe' },
  { name: 'Sue' },
]);

source$
  // custom compare based on name
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  .subscribe(console.log);
// output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
