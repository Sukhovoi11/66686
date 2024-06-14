const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Указываем статические файлы для каждой директории
app.use('/liczba', express.static(path.join(__dirname, 'liczba')));
app.use('/koleso', express.static(path.join(__dirname, 'koleso')));

// Главная страница по умолчанию
app.get('/', (req, res) => {
    res.redirect('/liczba/123123.html');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});