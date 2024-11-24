/**
 * https://github.com/gatteo/matteogiardino.com
 */
import Slugger from "github-slugger";
import { type Plugin } from "unified";
import { visit } from "unist-util-visit";

import { PN } from "@/config/types";

const slugger = new Slugger();

export const remarkHeading: Plugin = () => {
  return (tree, file) => {
    const pn: PN[] = [];
    slugger.reset();

    visit(tree, "heading", (node: any) => {
      node.data ||= {};
      node.data.hProperties ||= {};

      const text = node.children[0].value;
      const id = slugger.slug(text);

      node.data.hProperties.id = id;

      pn.push({
        title: text,
        url: id,
        depth: node.depth,
      });

      return "skip";
    });

    file.data.pn = pn;
  };
};
