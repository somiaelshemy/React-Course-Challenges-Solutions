function Interface({ balance, loan }) {
  return (
    <div className="interface">
      <h3>
        Balance: <strong>{balance}</strong>
      </h3>
      <h3>
        Loan: <strong>{loan}</strong>
      </h3>
    </div>
  );
}

export default Interface;
