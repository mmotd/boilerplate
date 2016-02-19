# boilerplate

1. User register/auth
2. Data submit if auth

## Summary:

**Firebase** (for BaaS):

1. New
2. Enable email/password authentication
3. Security & Rules:

```
{
    "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
    }
}
```

Cloud9 IDE (for pair programming):

```
npm init
npm i --save express
npm i --save-dev browserify
npm i --save firebase
```

reuse code for server.js

write index.html and js/firebase.js

`browserify js/firebase.js -o public/bundle.js`

```
npm i
npm start
```
