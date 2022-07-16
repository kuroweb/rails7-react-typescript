import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import HomeIndex from '../pages/homes/index';

// HomeController #index
const homeIndex = document.getElementById('home_index');
if (homeIndex!) {
  createRoot(homeIndex!).render(
    <React.StrictMode>
      <HomeIndex {...homeIndex?.dataset} />
    </React.StrictMode>
  );
}
