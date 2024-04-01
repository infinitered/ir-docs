// Gruvbox Material (dark)
// Author: Sainnhe Park (https://github.com/sainnhe)
// https://github.com/sainnhe/gruvbox-material
import type {PrismTheme} from "prism-react-renderer"

const theme: PrismTheme = {
  plain: {
    color: "#e6e1d5",
    backgroundColor: "#292828",
  },
  styles: [
    {
      types: [
        "class-name",
        "maybe-class-name",
        "sealed class",
        "constant",
      ],
      style: {
        color: "#aad5e7",
        fontWeight: "500"

      },
    },
    {
      types: [
        "imports",
        "doctype",
        "builtin",
        "function",
      ],
      style: {
        color: "#f1c98e",
        fontWeight: "400"
      },
    },
    {
      types: ["property-access"],
      style: {
        color: "#74e1c9",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#ffc19a",
      },
    },
    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#bcce67",
      },
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#93c78b",
      },
    },
    {
      types: ["comment", "prolog", "cdata", "operator", "inserted"],
      style: {
        color: "#dbc7e5",
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
        color: "#fca39d",
        fontWeight:"400"
      },
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#eaa3b7",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#f5f2ed",
        fontWeight: "300"
      }
    },
    {
      types:["function-variable"],
      style:{
        color:"#f1c98e"
      }
    }
  ],
}
export default theme
