type Props = {
  props?: string;
};

const HomeEdit = (props: Props): JSX.Element => {
  const datatablesEvent = () => {
    console.log(props);
  };
  return (
    <>
      <p>Home #Edit</p>
      <button onClick={() => datatablesEvent()}>hoge</button>
    </>
  );
};

export default HomeEdit;
