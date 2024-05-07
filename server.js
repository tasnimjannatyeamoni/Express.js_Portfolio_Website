const express = require('express');
const website = express();
const PORT = process.env.PORT || 3000;

website.set('view engine', 'ejs');

website.use(express.static('public'));

website.get('/', (req, res) => {
    res.render('index', { title: 'Home', active: 'home' });
});

website.get('/about', (req, res) => {
    res.render('about', { title: 'About', active: 'about' });
});

website.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects', active: 'projects' });
});

website.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact', active: 'contact' });
});

website.get('/services', (req, res) => {
    res.render('services', { title: 'services', active: 'services' });
});

website.use((req, res) => {
    res.status(404).send('404: Page not found');
});

website.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
