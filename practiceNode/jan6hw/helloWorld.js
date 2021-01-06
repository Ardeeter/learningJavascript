const express = require('express');
const app = express();

app.use(require('./routes/index'))

app.use(require('./routes/cats'))

app.use(require('./routes/dogs'))

app.use(require('./routes/cats_and_dogs'))

app.use(require('./routes/greet'))

app.use(require('./routes/year_of_birth'))

app.listen(4000, () => {
    console.log('Running in Port 4000');
})