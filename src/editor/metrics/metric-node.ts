import clsx from "clsx";
import { ElementNode, TextNode } from "lexical";

class MetricNode extends TextNode {
  __metric;
  __network;

  static getType() {
    return "metric";
  }

  static clone(node: MetricNode) {
    return new MetricNode(node.__network, node.__text, node.__key);
  }

  constructor(network: string, metric: string, key?: string) {
    super(metric, key);
    this.__network = network;
    this.__metric = metric;
    this.setMode("token");
  }

  createDOM(config) {
    const dom = super.createDOM(config);
    dom.className = clsx("metric", this.__network);
    return dom;
  }
}

export function $createMetricNode(network: string, metric: string) {
  return new MetricNode(network, metric);
}

export function $isMetricNode(node: ElementNode) {
  return node instanceof MetricNode;
}

export default MetricNode;
