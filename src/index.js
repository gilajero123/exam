import express from 'express';
import exam from '../src/route/exam.js';
import subject from '../src/route/subject.js';
import mydata from '../src/route/mydata.js';
import node from '../src/route/node.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome!');
});

app.use(exam);
app.use(subject);
app.use(mydata);
app.use(node);


// const PORT = 3333;
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});