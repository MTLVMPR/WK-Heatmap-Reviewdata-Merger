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

    const str = JSON.stringify(combinedArray)
      const pre = document.createElement("pre");
      pre.textContent = str;
      document.getElementById("outputter").appendChild(pre);

}

// Paste your data here in place of the []
// If you have a second list, paste that to the listB

let listA = [];
let listB = [];

