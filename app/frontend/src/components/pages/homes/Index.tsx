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

export default HomeIndex;
