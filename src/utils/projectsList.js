const projects = [
  {
    title: 'Url Shortener',
    imgUrl: '/url-shortener-api-doc.webp',
    explanation: 'API for shortening urls with Gin using Short-ID and Redis as database.',
    stack: 'Go, Gin, Redis, Swagger',
    liveUrl: 'https://slash.up.railway.app/api/all',
    repoUrl: 'https://github.com/Patrick564/url-shortener-backend'
  },
  {
    title: 'Temporal Mail TUI',
    imgUrl: '/tmp-mail-tui.webp',
    explanation: 'A TUI created with Go and Bubble Tea using RapidAPI temporal mail API.',
    stack: 'Go, Bubble Tea, RapidAPI',
    liveUrl: 'https://github.com/Patrick564/temp-mail-cli',
    repoUrl: 'https://github.com/Patrick564/temp-mail-cli'
  },
  {
    title: 'Contacts Calendar',
    imgUrl: '/contacts-calendar.webp',
    explanation: 'Created with Django for login (with user and password) and save, edit, or delete your contacts info using a database (PostgreSQL).',
    stack: 'Django, Tailwind CSS, PostgreSQL, Docker',
    liveUrl: 'https://contacts-calendar.up.railway.app',
    repoUrl: 'https://github.com/Patrick564/contacts_calendar'
  },
  {
    title: 'Url QR Generator',
    imgUrl: '/qr-generator.png',
    explanation: 'An API to generate QR Codes from an url and list in web as a folder (saving images in server).',
    stack: 'Go, Go-QRCode, UUID',
    liveUrl: 'https://qr-generator.up.railway.app/qr-codes/',
    repoUrl: 'https://github.com/Patrick564/qr-converter-golang'
  },
  {
    title: 'Notes API',
    imgUrl: '/notes-nestjs-api-doc.webp',
    explanation: 'Notes API made with NestJS using JWT for authentication.',
    stack: 'NestJS, NodeJS, MySQL(PLanetScale)',
    liveUrl: 'https://todo-nestjs.up.railway.app/',
    repoUrl: 'https://github.com/Patrick564/notes-login-nestjs'
  }
]

export default projects
