function superFunc() {
  const combinedArray = Array.from(new Set(listA.concat(listB).map(JSON.stringify)), JSON.parse);
  combinedArray.sort((a, b) => {
    const timestampA = parseInt(a[0]);
    const timestampB = parseInt(b[0]);
    if (timestampA < timestampB) {
      return -1;
    }
    if (timestampA > timestampB) {
      return 1;
    }
    return 0;
  });

  const str = JSON.stringify(combinedArray);
  const pre = document.createElement("pre");
  pre.textContent = str;

  // create copy button
  const copyBtn = document.createElement("button");
  copyBtn.textContent = "Copy";
  copyBtn.onclick = () => {
    const textToCopy = `review_cache.insert(${str.trim()})`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  // insert copy button and outputter div
  const outputter = document.getElementById("outputter");
  outputter.innerHTML = "";
  outputter.appendChild(copyBtn);
  outputter.appendChild(pre);
}

// Paste your data here in place of the []
// If you have a second list, paste that to the listB

let listA = [];
let listB = [];
