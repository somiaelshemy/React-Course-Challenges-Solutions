import { useState } from "react";

const MAX_LOAN = 500;

function Options({
  dispatch,
  isOpened,
  loan,
  balance,
  deposit,
  withdraw,
  inputLoan,
  setDeposit,
  setWithdraw,
  setInputLoan,
}) {
  const [invalidWithdraw, setInvalidWithdraw] = useState(false);
  const [invalidLoan, setInvalidLoan] = useState(false);

  function handleWithdraw() {
    if (balance < withdraw) return setInvalidWithdraw(true);
    setInvalidWithdraw(false);
    dispatch({ type: "withdraw", payload: Number(withdraw) });
  }

  function handleLoan(takeLoan) {
    if (takeLoan && (loan > MAX_LOAN || Number(inputLoan) + loan > MAX_LOAN))
      return setInvalidLoan(true);

    let payload = takeLoan ? +Number(inputLoan) : -Number(inputLoan);
    if (!takeLoan && Number(inputLoan) > loan) payload = -loan;
    setInvalidLoan(false);
    dispatch({
      type: "loan",
      payload,
    });
  }

  return (
    <form className="options" onSubmit={(e) => e.preventDefault()}>
      <button
        className="btn"
        disabled={isOpened}
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open Account
      </button>

      <div className="option">
        <input
          disabled={!isOpened}
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="e.g. 200"
        ></input>
        <button
          disabled={!isOpened}
          onClick={() => {
            dispatch({ type: "deposit", payload: Number(deposit) });
            setDeposit(0);
          }}
        >
          Deposit
        </button>
      </div>

      <div className="option">
        <input
          id="withdraw"
          disabled={!isOpened}
          value={withdraw}
          onChange={(e) => setWithdraw(e.target.value)}
          placeholder="e.g. 200"
        ></input>
        <button disabled={!isOpened} onClick={() => handleWithdraw()}>
          Withdraw
        </button>
        {invalidWithdraw && (
          <label>
            invalid withdraw, you have only {balance} in your account
          </label>
        )}
      </div>

      <div className="option">
        <input
          disabled={!isOpened}
          value={inputLoan}
          onChange={(e) => setInputLoan(e.target.value)}
          placeholder="e.g. 200"
        ></input>
        <button
          disabled={!isOpened || (isOpened && loan >= MAX_LOAN)}
          onClick={() => handleLoan(true)}
        >
          Request a Loan
        </button>
        <button
          disabled={!isOpened || loan <= 0}
          onClick={() => handleLoan(false)}
        >
          Pay Loan{" "}
        </button>
        {invalidLoan && (
          <label>
            Invalid Loan, You Can not have more than {MAX_LOAN} in Your Loan
            Field
          </label>
        )}
      </div>

      <button
        className="btn"
        disabled={!isOpened || loan > 0 || balance > 0}
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        Close Account
      </button>
    </form>
  );
}

export default Options;
