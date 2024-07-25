const data = require("./data.json");

console.log(`Number of Verbs ==> ${data.length}`);
let roNameArr = [];
let idArr = [];
for (let i = 0; i < data.length; i++) {
  if (roNameArr.includes(data[i].nameRo[0])) {
    console.error(`--------- Duplicated name ${data[i].nameRo[0]}`);
  }
  if (idArr.includes(data[i].id)) {
    console.error(`--------- Duplicated id ${data[i].id}`);
  }
  let missedPerson = "";
  if (
    ![
      "eu",
      "tu",
      "el",
      "noi",
      "voi",
      "ei",
      "eu1",
      "tu1",
      "el1",
      "noi1",
      "voi1",
      "ei1",
    ].every((item) => {
      missedPerson = item;
      return Object.keys(data[i].conjugation).includes(item);
    })
  ) {
    console.error(
      `--------- Missed conjugation for person '${missedPerson}' for verb '${data[i].nameRo[0]}'`
    );
  }
  roNameArr.push(data[i].nameRo[0]);
  idArr.push(data[i].id);
}
