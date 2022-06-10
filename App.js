import * as React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './assets/css/tailwind.json';
import Route from '@packpack/Route.js';

export default function App () {
  return (
    <TailwindProvider utilities={utilities}>
      <Route />
    </TailwindProvider>
  );
};
