// steps in rxjs
// a. create observable and put in variable
// b. run your code in the created observable
// c. subscribe to observable

// 1. ** create:
// const observable = Rx.Observable.create(observer => {
//     observer.next('Hello');
//     observer.next('world');
// });

// observable.subscribe(val => print(val))

// 2. **fromEvent: use for event handling
// const clicks = Rx.Observable.fromEvent(document, 'click')
// clicks.subscribe(click => print(click);


// 3. **fromPromise: use for asyncronous programming
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('resolved')
//     }, 5000);
// })

// const obsvPromise = Rx.Observable.fromPromise(promise);
// obsvPromise.subscribe(val => print(val))

// 4. **timer: create timer from within rxjs
// const timer = Rx.Observable.timer(1000)
// timer.subscribe(done => print("ding!!!"))

// 5. ** interval:
// const interval = Rx.Observable.interval(1000)
// interval.subscribe(done => print(new Date().getSeconds()))
// 6. ** of: for adding anything into the observable
// const mashup = Rx.Observable.of('anything', ["jay", "mama", "lily", "simon"], { age: 40, job: "IT" }, true)
// mashup.subscribe(val => print(val))

// 7. ** cold: only offered on subscription
// const cold = Rx.Observable.create(observer => {
//     observer.next(Math.random())
// })
// cold.subscribe(val => {
//     print(`Subscriber a: ${val}`)
// })
// cold.subscribe(val => {
//     print(`Subscriber b: ${val}`)
// })

// 8. ** hot: makes both randomsied values same unlike above
// var randomised = Math.random()
// const hot = Rx.Observable.create(observer => {
//     observer.next(randomised)
// })

// hot.subscribe(val => print(val))
// hot.subscribe(val => print(val))

// 9. ** hot but not decoupled using publish and connect
// const cold = Rx.Observable.create(observer => {
//     observer.next(Math.random())
// })

// const hot = cold.publish()
// hot.subscribe(val => {
//     print(`Value a: ${val}`)
// })
// hot.subscribe(val => {
//     print(`Value b: ${val}`)
// })

// hot.connect()

// 10. ** finally: using finally to give feedback when done
// timer = Rx.Observable.timer(5000)
// timer.finally(() => print('All Done ')).subscribe()

// 11. ** unsubscribe: to end observables that do not terminate on their own such as interval

// const interval = Rx.Observable.interval(1000)
// const subscription = interval.subscribe(x => print(x))

// const timer = Rx.Observable.timer(3000)
// timer.subscribe(() => {
//     subscription.unsubscribe()
// })
// same as above
// setTimeout(() => {
//     subscription.unsubscribe()
// }, 5000);


// vectoried operations
// 12. ** map:

// const num = Rx.Observable.of(1, 2, 3, 4, 5, 6)
// num.map(n => n * n).subscribe(newn => print(newn))

// also usable for apicalls
// const jsonString = '{"name": "jude", "age": 40, "job": "IT"}'
// const apiCall = Rx.Observable.of(jsonString);

// apiCall.map(json => JSON.parse(json)).subscribe(val => {
//         print(val.name)
//         print(val.age)
//     })


// 13. filter:
// const num = Rx.Observable.of(2, 3, 4, 5, 6, 7, 8)

// num.filter(n => n % 2 == 0).subscribe(v => print(v))

// 14. do: n.b map only returns values
// const names = Rx.Observable.of("Simon", "Lily", "mama", "daddy")
// names
//     .do(n => print(n))
//     .map(n => (n.toUpperCase()))
//     .do(n => print(n))
//     .subscribe()



function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
};