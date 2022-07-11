import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ParagraphNode, TextNode } from "lexical";
import { useEffect } from "react";
import MetricNode, { $createMetricNode } from "./metric-node";

const metric = "fb_likes";

function transformMetricNode(node: TextNode) {
  if (node instanceof MetricNode) return;

  const text = node.getTextContent();
  const index = text.indexOf(metric);

  if (index !== -1) {
    console.log("MATCH", index, text);
    // const container = new ParagraphNode();
    // let [before, replacement, after] = node.splitText(
    //   0,
    //   index,
    //   index + metric.length
    // );
    // if (index === 0) {
    //   replacement = before;
    //   before = undefined;
    // }

    // if (before) {
    //   container.append(before);
    // }

    // node.getParent()?.append($createMetricNode("facebook", "some metric"));

    // if (after) {
    //   container.append(after);
    // }

    // console.log(container);
    // const yolo = new TextNode("yolo");
    // yolo.setMode("token");
    // node.replace(container);
    node.replace($createMetricNode("facebook", "some metric"));
    // node.remove();
    // node.setTextContent(text.slice(0, -1));
  }
}

function MetricPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.registerNodeTransform(TextNode, transformMetricNode);
  }, [editor]);

  return null;
}

export default MetricPlugin;
