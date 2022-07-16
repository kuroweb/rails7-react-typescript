import React from 'react';
import { createRoot } from 'react-dom/client';

type Props = {
  props?: string;
};

const HomeIndex = (props: Props): JSX.Element => {
  const datatablesEvent = () => {
    console.log(props);
  };
  return (
    <>
      <p>Home #index</p>
      <button onClick={() => datatablesEvent()}>hoge</button>
    </>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('home_index');
  createRoot(element!).render(
    <React.StrictMode>
      <HomeIndex {...element?.dataset} />
    </React.StrictMode>
  );
});
