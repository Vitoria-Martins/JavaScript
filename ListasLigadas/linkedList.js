export function defaultEquals(a, b) {
  return a === b;
}

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

import { defaultEquals } from "../util";
import { Node } from "./models/linked-list-models";
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equals = equalsFn;
  }
}
