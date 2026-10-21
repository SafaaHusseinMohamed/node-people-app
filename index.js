const yargs = require("yargs");
const people = require("./people.js");

yargs.command({
  command: "add",
  describe: "to add two items",
  builder: {
    id: {
      describe: "this id",
      demandOption: true,
      type: "number",
    },

    fname: {
      describe: "this fname",
      demandOption: true,
      type: "string",
    },

    lname: {
      describe: "this lname",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "this age",
      demandOption: true,
      type: "number",
    },
    city: {
      describe: "this city",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    people.addperson(x.id, x.fname, x.lname,x.age, x.city);
  },
});
////////////////////////////////////////////////////////////////////////
yargs.command({
  command: "read",
  describe: "read data",
  builder: {
    id: {
      describe: "read item id",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
people.readdata(x.id);
  },
});
/////////////////////////////////////////////////////////////////////////
yargs.command({
  command: "readall",
  describe: "read all data",
  handler: () => {
    people.readalldata();
  },
});
/////////////////////////////////////////////////////////////////////
yargs.command({
  command: "delete",
  describe: "to delete an item",
  handler: (x) => {
    people.delperson(x.id);
  },
});

////////////////////////////////////////////////////////////////////////
yargs.command({
  command: "deleteall",
  describe: "delete all data",
  handler: () => {
    people.deletealldata();
  },
});
//////////////////////////////////////////////////////////////////////
yargs.command({
  command: "veiw",
  describe: "veiw all data",
  handler: () => {
    people.veiwdata();
  },
});
yargs.parse();
/////////////////////////////////////////////////////////////////////////
