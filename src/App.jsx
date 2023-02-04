import './App.css'
import MyComponent from './components/mycomponent'
import ControlledInput from './components/ctrlinput'
import MyForm from './components/ctrlform'
import Counter from './components/counter'

import FunctionalInput from './components/ctrlinput'
import FunctionalForm from './components/ctrlform'
import MyApp from './components/callbackprops'
import FunctionalCounter from './components/counter';



export default function App() {
  return (
    <main>
      <MyApp />
      <ControlledInput />
      <FunctionalInput />
      <MyComponent />
      <MyForm />
      <FunctionalForm />
      <Counter />
      <FunctionalCounter />
    </main>
  )
}
