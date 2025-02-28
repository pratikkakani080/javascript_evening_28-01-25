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
    body: JSON.stringify({ title: 'test' }),
    headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }
}).then((res) => {
    console.log('res*', res);
    return res.json()
}).then((resolvedRes) => {
    console.log('resolvedRes*', resolvedRes);
}).catch((error) => {
    console.log('error**', error);
})

// PUT/PATCH method
fetch('https://jsonplaceholder.typicode.com/photos/1', {
    method: 'PUT',  // PATCH
    body: JSON.stringify({ title: 'test' })
}).then((res) => {
    console.log('res*', res);
    return res.json()
}).then((resolvedRes) => {
    console.log('resolvedRes*', resolvedRes);
}).catch((error) => {
    console.log('error**', error);
})

// DELETE method
fetch('https://jsonplaceholder.typicode.com/photos/3', {
    method: 'DELETE'
}).then((res) => {
    console.log('res*', res);
    return res.json()
}).then((resolvedRes) => {
    console.log('resolvedRes*', resolvedRes);
}).catch((error) => {
    console.log('error**', error);
})