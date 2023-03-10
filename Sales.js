const { useState } = require('react');

function SalesTracker() {
  const [sales, setSales] = useState(0);
  const [goal, setGoal] = useState(1000);
  const [reachedGoal, setReachedGoal] = useState(false);

  function addSale() {
    setSales(sales + 1);
    if (sales + 1 >= goal) {
      setReachedGoal(true);
    }
  }

  return (
    <div>
      <h1>Sales Tracker</h1>
      <p>Sales: {sales}</p>
      <p>Goal: {goal}</p>
      <p>{reachedGoal ? "You've reached your sales goal!" : "Keep going!"}</p>
      <button onClick={addSale}>Add Sale</button>
    </div>
  );
}

module.exports = SalesTracker;
