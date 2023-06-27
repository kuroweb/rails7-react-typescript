import React from 'react';
import { createRoot } from 'react-dom/client';

// Components
import HomeIndex from '../components/pages/homes/Index';
import HomeEdit from '../components/pages/homes/Edit';

document.addEventListener('DOMContentLoaded', () => {
  // HomesController #index
  const homeIndex = document.getElementById('home_index');
  if (homeIndex!) {
    createRoot(homeIndex!).render(
      <React.StrictMode>
        <HomeIndex {...homeIndex?.dataset} />
      </React.StrictMode>
    );
  }

  // HomesController #edit
  const homeEdit = document.getElementById('home_edit');
  if (homeEdit!) {
    createRoot(homeEdit!).render(
      <React.StrictMode>
        <HomeEdit {...homeEdit?.dataset} />
      </React.StrictMode>
    );
  }
});
