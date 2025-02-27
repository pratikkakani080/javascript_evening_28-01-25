// Promise statement
// Pending
// Resolve || success || fullfilled
// Reject || failure

// API methods = CRUD operation
// POST = create
// GET = read
// PUT | PATCH = update
// DELETE = delete

// GET method
fetch('https://jsonplaceholder.typicode.com/photos').then((res) => {
    console.log('res*', res);
    return res.json()
}).then((resolvedRes) => {
    console.log('resolvedRes*', resolvedRes);
}).catch((error) => {
    console.log('error**', error);
})

// POST method
fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'POST',
    body: {}
}).then((res) => {
    console.log('res*', res);
    return res.json()
}).then((resolvedRes) => {
    console.log('resolvedRes*', resolvedRes);
}).catch((error) => {
    console.log('error**', error);
})
