exports.formatDates = (list) => {
  const formatedDates = list.map((date) => {
    newDate = { ...date };
    newDate.currentTime = new Date().getDate();
    return newDate;
  });

  return formatedDates;
};

exports.makeRefObj = (list) => {
  const newList = list.map((listObj) => {
    const newObj = { ...listObj };
    newObj.currentTime = new Date().getDate();
    delete thisIsObject.article_id;
    delete thisIsObject.title;
    return newobj;
  });
  console.log(newList)
  return newList;
};

exports.formatComments = (comments, articleRef) => {};
