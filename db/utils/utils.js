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
    if (newObj.currentTime) {
      newObj.currentTime = new Date().getDate();
    }
    newObj[listObj.title] = listObj.article_id;
    delete newObj.article_id;
    delete newObj.title;
    return newObj;
  });
  return newList;
};

exports.formatComments = (comments, articleRef) => {};
