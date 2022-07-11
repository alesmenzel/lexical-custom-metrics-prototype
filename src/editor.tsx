import { $getRoot, $getSelection, EditorState } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";
import { MetricNode, MetricPlugin } from "./editor/metrics";

function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext();
  return (
    <TreeView
      editor={editor}
      timeTravelButtonClassName=""
      timeTravelPanelButtonClassName=""
      timeTravelPanelClassName=""
      timeTravelPanelSliderClassName=""
      viewClassName="tree"
    />
  );
}

const theme = {
  // Theme styling goes here
  // ...
  paragraph: "editor-paragraph"
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error);
}

function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [MetricNode]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={
            <div className="editor-placeholder">Enter some text...</div>
          }
        />
        <HistoryPlugin />
        <TreeViewPlugin />
        <MetricPlugin />
      </div>
    </LexicalComposer>
  );
}

export default Editor;
