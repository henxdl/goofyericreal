const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/runJavaCode', (req, res) => {
  const { variables } = req.body;

  const javaProcess = exec(`java -jar ericjavahere.jar ${variables}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Java code: ${error.message}`);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log(`Java code output: ${stdout}`);
    res.json({ result: stdout });
  });

  javaProcess.stdin.end();
});

app.listen(port, () => {
  console.log(`Node.js server listening at http://localhost:${port}`);
});
