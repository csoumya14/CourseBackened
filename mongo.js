const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://greatsoumya:${password}@cluster0.m1ru3ml.mongodb.net/?retryWrites=true&w=majority`

const testUrl =
  `mongodb+srv://greatsoumya:${password}@cluster0.m1ru3ml.mongodb.net/testNoteApp?retryWrites=true&w=majority`


mongoose.set('strictQuery',false)
mongoose.connect(testUrl)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Learning backend is fun',
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
}) 

/* Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  }) */