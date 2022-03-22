const input = document.getElementById('input');

input.addEventListener('change', function () {
  readXlsxFile(input.files[0]).then(function (rows) {
    // rows is an array of rows
    // each row being an array of cells.
    console.log(rows);
    const newArr = rows.reduce((prev, curr) => {
      const x = curr.splice(0, 1);
      prev = { ...prev, [x]: [...curr] };
      //   prev.push({ [x]: [...curr] }); lw el natg el neha2y fe array
      return prev;
    }, {});
    console.log(newArr);
  });
});
