const projects = [
  {
    title: 'Planetarium (NASA API)',
    imgUrl: '/planetarium.webp',
    explanation: 'Displays images and descriptions from A Picture Of the Day and Mars Rover ordering the images by their different cameras.',
    stack: 'JavaScript | React | Styled-Components | Docker',
    liveUrl: 'https://planetarium-nasa-api.vercel.app',
    repoUrl: 'https://github.com/Patrick564/planetarium-nasa-api'
  },
  {
    title: 'Chat Room (Client)',
    imgUrl: '/chat-room-client.webp',
    explanation: 'Made with ExpressJS in the server and React in the client, using a username for register and styled with Styled-Components.',
    stack: 'JavaScript | React | Styled-Components | Socket.io',
    liveUrl: 'https://chat-room-client-psi.vercel.app',
    repoUrl: 'https://github.com/Patrick564/chat-room-client'
  },
  {
    title: 'Contacts Calendar',
    imgUrl: '/contacts-calendar.webp',
    explanation: 'Created with Django for login (with user and password) and save, edit, or delete your contacts info using a database (PostgreSQL).',
    stack: 'Django | Tailwind CSS | PostgreSQL | Docker',
    liveUrl: 'https://contacts-calendar.up.railway.app',
    repoUrl: 'https://github.com/Patrick564/contacts_calendar'
  },
  {
    title: 'Photo Gallery (AWS-S3)',
    imgUrl: '/photo-gallery.webp',
    explanation: 'Using Astro and React for show, upload, and delete images to AWS-S3 service (using the AWS-SDK), and styled with Tailwind CSS.',
    stack: 'Astro | React | Tailwind CSS',
    liveUrl: 'https://aws-photo-gallery.netlify.app',
    repoUrl: 'https://github.com/Patrick564/photo-gallery'
  },
  {
    title: 'Poke App (Client)',
    imgUrl: '/poke-app-client.svg',
    explanation: 'A React Native app (created with Expo), consuming a Fastify server using the PokeAPI, login with Google, and use MongoDB as database.',
    stack: 'Fastify | React Native | Expo | MongoDB',
    liveUrl: 'https://expo.dev/@patrick794/poke-app-client',
    repoUrl: 'https://github.com/Patrick564/poke-app-client'
  }
]

export default projects
