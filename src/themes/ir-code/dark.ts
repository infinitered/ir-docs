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
      ],
      style: {
        color: "#b6d3e3",
        fontWeight: "500"

      },
    },
    {
      types: ["tag"],
      style: {
        color: "#ffc19a",
      },
    },
    {
      types: [
        "imports",
        "doctype",
        "function",
      ],
      style: {
        color: "#cfba9b",
        fontWeight: "600"
      },
    },
    {
      types: ["property-access", "property"],
      style: {
        color: "#caa9de",
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
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "#cfc46d",
        fontStyle: "italic",
        fontWeight: "200"
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
        "builtin",
      ],
      style: {
        color: "#E3847D",
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
      types: ["punctuation", "operator",],
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
    },
    {
      types: ["inserted"],
      style: {
        color: "#8ad968",
        backgroundColor: "rgba(84,255,0,0.13)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#fd6464",
        backgroundColor: "rgba(245,52,52,0.13)",
      },
    }
  ],
}
export default theme
