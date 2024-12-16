document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#recover-btn").addEventListener("click", recover);
});

const recover = () => {
  let year = parseInt(document.querySelector("#birth-year").value, 10);
  let nricEnd = document.querySelector("#nric-end").value.toUpperCase();
  const ending = parseInt(nricEnd.slice(0, 3), 10);
  const checksum = nricEnd.slice(3, 4);
  const checksums = "JZIHGFEDCBA";

  if (!(Number.isInteger(year) && year >= 1968 && year <= 2024 &&
    Number.isInteger(ending) && ending >= 0 && ending <= 999 &&
    checksums.includes(checksum))) {
    return alert("Invalid input");
  }

  const hash = (n, m) => m.reduce((a, v) => (a += (n % 10) * v, n = n / 10 | 0, a), 0);
  const base = hash(year, [7, 2]) + hash(ending, [2, 3, 4]);
  const genz = (year >= 2000) | 0;

  const candidates = new Array(100).fill(0).map((_, i) => 
    (checksums[(base + hash(i, [5, 6]) + genz * 4) % 11] === checksum) ?
    "ST"[genz] + (year + "").slice(-2) + (i + "").padStart(2, "0") + nricEnd : null
    ).filter(i => i);
  alert("Possible NRIC numbers:\n" + candidates.join(", "));
};
