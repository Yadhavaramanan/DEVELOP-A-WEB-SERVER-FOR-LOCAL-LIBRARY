const express = require('express');
const app = express();
const PORT = 3001;

// Task 1: Welcome Page
app.get('/', (req, res) => {
    res.send(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
            <div style="width: 80%; padding: 20px; border: 2px solid #ccc; border-radius: 20px; background-color: #f9f9f9; text-align: center;">
                <h3 style="color: blue;">Welcome to the Local Library!</h3>
                <h1 style="color: darkred;"><b>DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</b></h1>
                <h2 style="color: green;"><b>M.KUMARASAMY COLLEGE OF ENGINEERING KARUR</b></h2>
            </div>
        </div>
    `);
});
//Task2
// Library Operating Hours Page
app.get('/hours', (req, res) => {
    res.send(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
            <div style="width: 60%; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9; text-align: center;">
                <h1 style="color: darkblue;">Library Operating Hours</h1>
                <p style="color: darkgreen;">Monday to Friday: 9:00 AM - 6:00 PM</p>
                <p style="color: darkgreen;">Saturday: 10:00 AM - 4:00 PM</p>
                <p style="color: darkred;">Sunday: Closed</p>
            </div>
        </div>
    `);
});
//Task3
// Contact Information Page
app.get('/contact', (req, res) => {
    res.send(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
            <div style="width: 60%; padding: 20px; border: 2px solid #ccc; border-radius: 10px; background-color: #f9f9f9; text-align: center;">
                <h1 style="color: darkblue;">Contact Us</h1>
                <p style="color: darkgreen;">Name: Yadhavaramanan C</p>
                <p style="color: darkgreen;">Email: yadhavaramananyadhava@gmail.com</p>
                <p style="color: darkgreen;">Phone: (+91) 8438691074</p>
                <p style="color: darkgreen;">Address: 15A Library Lane, Booktown, Namakkal.</p>
            </div>
        </div>
    `);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
