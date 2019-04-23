import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

app.get('/login', (req, res) => {
  res.cookie('token', '123456').send('send cookies to you');
});

app.get('/manage', (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
})

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});
