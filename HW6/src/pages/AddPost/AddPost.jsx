import React from "react";
// let newDate = new Date();
const AddPost = () => {
  return (
    <div>
      <input type="text" placeholder="заголовок" /> <br />
      <textarea placeholder="text"></textarea> <br />
      {/* <p>{new Date().toUTCString()}</p> */}
      <input type="datetime-local" />
    </div>
  );
};

export default AddPost;
