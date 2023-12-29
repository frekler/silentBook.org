To make Promise:

```js
const promise1 = new Promise((resolve, reject) => {
    resolve('foo');
})

// read
promise1.then((value) => {
    console.log(value);
});
promise1.catch((value) => )

console.log(promise1);
```
or:
```js
function akaFetch() {
    return new Promise((response, rejected) => {
setTimeout(() => {
    response('hello');
}, 0)
    })
}

akaFetch()
.then((response) => {
    console.log(response);
    return response + '!';
})
.then(console.log)
.catch(console.error)
.finally(() => {console.log('operation complete');})

```
or


```js
async function akaFetch(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.warn(error);
        return error;
    }
}

akaFetch('https://jsonplaceholder.typicode.com/photos')
.then((response) => {
    console.log(response);
})
.catch(console.error)
.finally(() => {console.log('operation complete');})
```