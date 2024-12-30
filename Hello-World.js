// hello-world.js
console.log("HELLO WORLD");

// server.js
const http = require('http');
const fs = require('fs');
const generatePassword = require('generate-password');
const nodemailer = require('nodemailer');

// 1. Créer un serveur Node.js
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node !!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// 2. Créer et lire un fichier welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created and data written to welcome.txt');

  // Lire et afficher le contenu du fichier
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });
});

// 3. Générer un mot de passe aléatoire
const password = generatePassword.generate({
  length: 10,
  numbers: true
});

console.log('Generated password:', password);

// 4. Envoyer un email avec nodemailer
let transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez le service de votre choix
  auth: {
    user: 'email@gmail.com',  // Remplacez par votre email
    pass: 'email-password'    // Remplacez par votre mot de passe (ou un mot de passe d'application)
  }
});

let mailOptions = {
  from: 'email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Test Email',
  text: 'Hello from Node.js using Nodemailer!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error occurred:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
