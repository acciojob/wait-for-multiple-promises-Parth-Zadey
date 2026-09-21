const output = document.getElementById("output");

// Helper to create a promise that resolves with its duration between 1 and 3 seconds
function createPromise(name) {
  // Random time between 1 and 3 seconds (e.g. 1.25s, 2.7s)
  const time = (Math.random() * 2 + 1);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, time });
    }, time * 1000);
  });
}

const startTime = performance.now();

const p1 = createPromise("Promise 1");
const p2 = createPromise("Promise 2");
const p3 = createPromise("Promise 3");

Promise.all([p1, p2, p3]).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Clear the initial "Loading..." row
  output.innerHTML = "";

  // Append a row for each resolved promise
  results.forEach((res) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${res.name}</td><td>${res.time.toFixed(3)}</td>`;
    output.appendChild(row);
  });

  // Append total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});