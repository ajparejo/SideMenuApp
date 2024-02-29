/* eslint-disable react/prop-types */
import { MenuList } from './components/MenuList'
import './App.css'

function App({ menu = []}) {

  return (
    <>
    <div className='container'>
      <div className='sideMenuContainer'>
        <MenuList list={menu}/>
      </div>
      <div className='mainContainer'>
        <h1>Side Menu App - Pick your preferred option</h1>
      </div>
    </div>
    </>
  )
}

export default App
