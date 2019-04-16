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




function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
};