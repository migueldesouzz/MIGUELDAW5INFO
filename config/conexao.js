const mongoose = require('mongoose');
const banco = "mongodb+srv://migueldesouzz:lanadelrey@cluster0.lnkqzes.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose;