import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import {applyPolyfills, defineCustomElements} from 'h8k-components/loader';

const SLIDES = [
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises."
    },
    {
      title: "First, Running",
      text: "Running are important. Remember to keep taking your breath properly."
  },
    {
        title: "Next, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
   
    {
        title: "Finally, 20 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
        title: "Excellent job!",
        text: "You made it, have a Great day and remember see you next time!"
    }
];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<App slides={SLIDES} />
);
// registerServiceWorker();

// applyPolyfills().then(() => {
//     defineCustomElements(window);
// })