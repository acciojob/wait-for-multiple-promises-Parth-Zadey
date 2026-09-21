const output = document.getElementById("output");

function createPromise(name) {
  const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time });
    }, time * 1000);
  });
}

const p1 = createPromise("Promise 1");
const p2 = createPromise("Promise 2");
const p3 = createPromise("Promise 3");

Promise.all([p1, p2, p3]).then((results) => {
  // Clear the initial "Loading..." row
  output.innerHTML = "";

  // Append a row for each resolved promise
  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${res.name}</td><td>${res.time.toFixed(3)}</td>`;
    output.appendChild(row);
  });

  // Calculate total time as the maximum time taken by any single promise
  const maxTime = Math.max(...results.map((r) => r.time));

  // Append total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${maxTime.toFixed(3)}</td>`;
  output.appendChild(totalRow);
});