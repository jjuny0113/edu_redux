const addPost = (data) => {
  console.log("addPost");
  return {
    type: "ADD_POST",
    data,
  };
};

module.exports = { addPost };
