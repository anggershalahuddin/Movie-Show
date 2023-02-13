import React, { useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

function TextEditor() {
  const editor = useRef();
  const [editorValue, seteditorValue] = useState("<p>Angger Shalhuddin</p>");
  const [disable, setDisable] = useState(true);

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };
  const handleChange = (content) => {
    seteditorValue(content);
  };

  return (
    <div className="App">
      <p>{editorValue}</p>
      <SunEditor
        name="my-editor"
        width="50%"
        height="300px"
        placeholder="Please type here..."
        setOptions={{
          height: 200,
          buttonList: [
            ["font", "fontSize", "formatBlock"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["align", "horizontalRule", "list", "table"],
            ["fontColor", "hiliteColor"],
            ["outdent", "indent"],
            ["undo", "redo"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["link", "image"],
            ["preview", "print"],
            ["fullScreen", "showBlocks", "codeView"],
          ],
        }}
        setContents={editorValue}
        setDefaultStyle="font-family: cursive; font-size: 20px;"
        disable={disable}
        onChange={(value) => {
          setDisable(!disable);
          handleChange(value);
        }}
        getSunEditorInstance={getSunEditorInstance}
      />
      <button
        onClick={() => {
          handleChange("Oren");
        }}
      >
        Send
      </button>

      <button
        onClick={() => {
          setDisable(true);
        }}
      >
        DISABLE
      </button>
    </div>
  );
}

export default TextEditor;
