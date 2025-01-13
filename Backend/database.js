const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shreyaagrawwal4:5kGz5SMMbXrkp4pw@cluster0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));