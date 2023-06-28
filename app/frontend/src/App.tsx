import React from 'react'

type Props = {
  children?: JSX.Element
}

const App = (props: Props): JSX.Element => {
  return (
    <React.StrictMode>
      <div className='App'>{props.children}</div>
    </React.StrictMode>
  )
}

export default App
