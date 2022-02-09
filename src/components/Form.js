import React, { useState } from "react";

const Form = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    alert("uploaded");
    console.log(file);
  }
  return (
    <div>
      <form enctype="multipart/form-data" onSubmit={onSubmit}>
        <div class="form-group">
          <input
            type="file"
            name="avatar"
            value={file}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Number of speakers"
            name="msg"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="btn">Get me the stats!</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
