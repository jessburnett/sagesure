import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';

function App() {
        //access data in store
        const account = useSelector((state) => state.account);
        const dispatch = useDispatch();

        const { depositClaim, withdrawClaim } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
      <div>{account}</div>
      <button onClick={() => depositClaim(1500)}>Claim Deposit</button>
      <button onClick={() => withdrawClaim(1500)}>Claim Withdraw</button>
    </div>
  );
}

export default App;
