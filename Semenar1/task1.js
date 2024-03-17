const http = require('http');

// Для хранения количества просмотров страниц
const pageViews = {'/': 0, '/about': 0};

// Функция для создания HTTP сервера
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        pageViews['/']++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`
            <h1>Добро пожаловать на главную страницу</h1>
            <p>Просмотры: ${pageViews['/']}</p>
            <a href="/about">О нас</a>
        `);
    } else if (req.url === '/about') {
        pageViews['/about']++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`
            <h1>О нас</h1>
            <p>Просмотры: ${pageViews['/about']}</p>
            <a href="/">Главная</a>
        `);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end('<h1>404 Не найдено</h1><p>Запрошенный URL не найден на сервере.</p>');
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
