const Promise = require('bluebird');


const space = Promise.coroutine(function*(name){
    if(name !== 'archie') throw new Error('an error occured')
    
    return 'naisu'
})

space(process.argv[2] || 'angga')
.then(() => console.log('success'))
.catch(err => console.log(err.message))