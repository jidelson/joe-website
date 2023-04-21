const express = require('express');
const path = require('path')
const app = express();


app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/api', (req, res) => {
  res.json({
      message: 'This is the api endpoint'
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT)