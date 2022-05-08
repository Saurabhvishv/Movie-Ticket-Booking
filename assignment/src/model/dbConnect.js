const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/ticketBooking?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })

    .then(() => console.log('mongodb running on 27017'))
    
    .catch(err => console.log(err))
