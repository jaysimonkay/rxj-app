// const observable = Rx.Observable.create(observer => {
//     observer.next('Hello');
//     observer.next('world');
// });

// observable.subscribe(val => print(val))


// const clicks = Rx.Observable.fromEvent(document, 'click')
// clicks.subscribe(click => print(click);


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved')
    }, 5000);
})

const obsvPromise = Rx.Observable.fromPromise(promise);
obsvPromise.subscribe(val => print(val))

function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
};