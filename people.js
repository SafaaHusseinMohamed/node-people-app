const fs = require("fs");

const addperson = (id, fname, lname, age, city) => {
  const alldata = loadinfo();
  const duplicate = alldata.filter((obj) => {
    return obj.id === id;
  });
  if (duplicate.length == 0) {
    alldata.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    savedata(alldata);
  } else {
    console.log("error:duplicated data");
  }
};
///////////////////////////////////////////////////////////////////////////
const readdata = (id) => {
  const alldata = loadinfo();
  const itemreaded = alldata.find((obj) => {
    return obj.id == id;
  });
  if (itemreaded) {
    console.log("readed successfully");
    console.log(itemreaded);
  } else {
    console.log("error:not found");
  }
};
///////////////////////////////////////////////////////////////////////////////
const readalldata = () => {
  const alldata = loadinfo();
  const itemsreaded = alldata.forEach((element) => {
    console.log(element);
  });
};
////////////////////////////////////////////////////////////////////////////////
const delperson = (id) => {
  const alldata = loadinfo();
  const datatokeep = alldata.filter((obj) => {
    return obj.id != id;
  });
  console.log(datatokeep);
  console.log("deleted successfully");
  savedata(datatokeep);
};
////////////////////////////////////////////////////////////////////////////////
const deletealldata = () => {
  const alldata = loadinfo();
  savedata([]);
};
/////////////////////////////////////////////////////////////////////////////
const veiwdata = (id) => {
  const alldata = loadinfo();
  const veiwperson = alldata.forEach((obj) => {
    console.log(obj.fname + " " + obj.lname , obj.city);
  });
};
////////////////////////////////////////////////////////////////////////////
const loadinfo = () => {
  try {
    const datajson = fs.readFileSync("data15.json").toString();

    return JSON.parse(datajson);
  } catch {
    return [];
  }
};
/////////////////////////////////////////////////////////////////////////////
const savedata = (alldata) => {
  const alldatajson = JSON.stringify(alldata);
  fs.writeFileSync("data15.json", alldatajson);
};

module.exports = {
  addperson,
  delperson,
  readdata,
  readalldata,
  deletealldata,
  veiwdata,
};
