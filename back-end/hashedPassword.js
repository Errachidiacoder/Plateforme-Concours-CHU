const bcrypt = require('bcryptjs');

const password = 'user123'; // The plain text password you want to hash
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log('Hashed Password:', hash);
});

