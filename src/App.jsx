import './App.css'
import MyComponent from './components/mycomponent'
import ControlledInput from './components/ctrlinput'
import MyForm from './components/ctrlform'
import Counter from './components/counter'
import Controller from './components/lifecycles'
import OnlyEvens from './components/lifecycles'
import MagicEightBall from './components/eightball'
import MyCondition from './components/conditionalrender'

import FunctionalInput from './components/ctrlinput'
import FunctionalForm from './components/ctrlform'
import MyApp from './components/callbackprops'
import FunctionalCounter from './components/counter';

const styles = {
  backgroundColor: "slategrey",
  fontSize: ".75em",
  textAlign: "center",
  border: "2px solid lightblue"
}

export default function App() {
  return (
    <main style={styles}>
      <MyApp />
      <ControlledInput />
      <FunctionalInput />
      <MyComponent />
      <MyForm />
      <FunctionalForm />
      
      <Counter />
      <FunctionalCounter />
      <Controller >
        <OnlyEvens />
      </Controller>
      <MagicEightBall />
      <MyCondition />
    </main>
  )
}
