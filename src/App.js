import './App.css';
import {useState} from 'react'


/*-----Components----*/
import {Home} from './components/Home'
import {Hall} from './components/Hall'

/*---Redux-----*/
import {connect} from 'react-redux'
import {setBGColorState} from "./redux/action/stateBgColor.action";

function App({bgColor, setBGColorState}) {
  const [changeColor, setChangeColor] = useState(false)

  return (
    <div className="App">
      <Home setChangeColor={setChangeColor}/>
      <Hall changeColor={changeColor}
            setChangeColor={setChangeColor}
            setBGColorState={setBGColorState}
            bgColor={bgColor}/>
    </div>
  );
}



const mapStateToProps = state=>({
    bgColor: state.bgColor
})

const mapDispatchToPRops = {
    setBGColorState
}

export default connect(mapStateToProps, mapDispatchToPRops)(App);
