// Gruvbox Material (dark)
// Author: Sainnhe Park (https://github.com/sainnhe)
// https://github.com/sainnhe/gruvbox-material
import type {PrismTheme} from "prism-react-renderer"

const theme: PrismTheme = {
  plain: {
    color: "#ebdbb2",
    backgroundColor: "#292828",
  },
  styles: [
    {
      types: [
        "class-name",
        "maybe-class-name",
        "sealed class",
      ],
      style: {
        color: "#48a995",
      },
    },
    {
      types: [
        "imports",
        "constant",
        "doctype",
        "builtin",
        "function",
      ],
      style: {
        color: "#d8a657",
      },
    },
    {
      types: ["property-access"],
      style: {
        color: "#7daea3",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#e78a4e",
      },
    },
    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#a9b665",
      },
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#89b482",
      },
    },
    {
      types: ["comment", "prolog", "cdata", "operator", "inserted"],
      style: {
        color: "#a89984",
      },
    },
    {
      types: [
        "delimiter",
        "boolean",
        "keyword",
        "selector",
        "important",
        "atrule",
        "deleted",
      ],
      style: {
        color: "#ea6962",
      },
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#d3869b",
      },
    },
  ],
}
export default theme
