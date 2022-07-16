type Props = {
  message?: string;
};

const HomeIndex = (props: Props): JSX.Element => {
  return (
    <>
      <p>Home #index</p>
      <p>{props.message}</p>
    </>
  );
};

export default HomeIndex;
