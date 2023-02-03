import './App.css'
import MyComponent from './components/mycomponent'
import ControlledInput from './components/ctrlinput'
import MyForm from './components/ctrlform'

import FunctionalInput from './components/ctrlinput'
import FunctionalForm from './components/ctrlform'
import MyApp from './components/callbackprops'


export default function App() {
  return (
    <main>
      <MyApp />
      <ControlledInput />
      <FunctionalInput />
      <MyComponent />
      <MyForm />
      <FunctionalForm />
    </main>
  )
}
