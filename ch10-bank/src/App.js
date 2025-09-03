import { useReducer, useState } from "react";
import Options from "./components/Options";
import Interface from "./components/Interface";
import Header from "./components/Header";

const initialState = {
  isOpened: false,
  balance: 0,
  loan: 0,
};

function App() {
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const [inputLoan, setInputLoan] = useState(0);
  const [{ isOpened, balance, loan }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function reducer(state, action) {
    console.log(action.payload);
    switch (action.type) {
      case "openAccount":
        return { ...state, isOpened: true };
      case "loan":
        return {
          ...state,
          loan: state.loan + action.payload,
          balance: state.balance + action.payload,
        };
      case "deposit":
        return { ...state, balance: state.balance + action.payload };
      case "withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "closeAccount": {
        setDeposit(0);
        setWithdraw(0);
        setInputLoan(0);
        return { ...initialState };
      }
      default:
        return state;
    }
  }

  return (
    <div className="app">
      <Header></Header>
      <Interface balance={balance} loan={loan}></Interface>
      <Options
        dispatch={dispatch}
        isOpened={isOpened}
        loan={loan}
        balance={balance}
        deposit={deposit}
        setDeposit={setDeposit}
        withdraw={withdraw}
        setWithdraw={setWithdraw}
        inputLoan={inputLoan}
        setInputLoan={setInputLoan}
      ></Options>
    </div>
  );
}

export default App;
