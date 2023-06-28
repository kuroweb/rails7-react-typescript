type Props = {
  props?: string
}

const Index = (props: Props): JSX.Element => {
  const datatablesEvent = () => {
    console.log(props)
  }

  return (
    <>
      <p>Tasks #index</p>
      <button onClick={() => datatablesEvent()}>hoge</button>
    </>
  )
}

export default Index
