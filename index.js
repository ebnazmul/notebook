const { default: mongoose } = require('mongoose');
const app = require('./app')

mongoose.connect(process.env.DB_URI).then(()=>console.log("Database sucessfuly conncted!"))

app.listen(3012, ()=> {
    console.log(`App started at http://localhost:${3012}`);
})


