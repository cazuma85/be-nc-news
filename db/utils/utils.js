exports.formatDates = (list) => {
  const formatedArticle = list.map((article) => {
    const newArticle = { ...article };
    newArticle.created_at = new Date(newArticle.created_at);
    return newArticle;
  });

  return formatedArticle;
};

exports.makeRefObj = (list) => {
  const arr = [...list];
  const newObj = {};
  arr.forEach((listObj) => {
    newObj[listObj.title] = listObj.article_id;
  });
  return newObj;
};

exports.formatComments = (comments, articleRef) => {
  const newComment = [...comments];
  //const arrOfKeys = Object.keys(articleRef);
  for (let i = 0; i < newComment.length; i++) {
    const oneObjectCommet = newComment[i];

    oneObjectCommet['author'] = oneObjectCommet.created_by;
    delete oneObjectCommet.created_by;
    oneObjectCommet['article_id'] = articleRef[oneObjectCommet.belongs_to];
    delete oneObjectCommet.belongs_to;
    if (oneObjectCommet.created_at ){oneObjectCommet.created_at = new Date(oneObjectCommet.created_at);}
    
  }
  return newComment;
};
