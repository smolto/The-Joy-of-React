import React from 'react';
import {createRoot} from 'react-dom/client';

import {formatDate} from './date-helpers.js';

const message = {
  content: 'Just ate at “Les Corbeaux En Colère”. Wonderful little venue!',
  published: '2024-03-14T15:09:26.000Z',
  author: {
    avatarSrc: 'https://sandpack-bundler.vercel.app/img/avatars/009.png',
    avatarDescription: 'Cartoon bear',
    name: 'Ben Thorn',
    handle: 'benjaminthorn',
  },
};

const {author} = message;
const profileUrl = `/users/${message.author.handle}`;

const element = (
  <article style={{filter: 'var(--shadow-elevation-high)'}}>
    <header>
      <img alt={author.avatarDescription} src={author.avatarSrc} />
      <a href={profileUrl}>{author.name}</a>
    </header>
    <p>{message.content}</p>
    <footer>
      Posted <time datetime={message.published}>January 1st at 12:00am</time>
    </footer>
  </article>
);

/*
Here's the raw HTML:

<article style="filter: var(--shadow-elevation-high)">
  <header>
    <img src="TODO">
    <a href="">Author name here</a>
  </header>
  <p>
    Message content here
  </p>
  <footer>
    Posted
    <time datetime="2024-01-01T00:00:00.000Z">
      January 1st at 12:00am
    </time>
  </footer>
</article>
*/

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);
