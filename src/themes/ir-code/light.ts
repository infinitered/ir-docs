import type {PrismTheme} from "prism-react-renderer"

const theme: PrismTheme = {
  plain: {
    backgroundColor: "#f7f5f5",
    color: "#292828",
  },

  styles: [
    {
      types: [
        "class-name",
        "maybe-class-name",
        "sealed class",
      ],
      style: {
        color: "#563fa2",
        fontWeight: "500"
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#83380f",
      },
    },
    {
      types: [
        "imports",
        "doctype",
        "builtin",
        "constant",
      ],
      style: {
        color: "#3c7b03",
        fontWeight: "600",
      },
    },
    {
      types: [
        "property-access",
        "property",
      ],
      style: {
        color: "#225f95",
      },
    },
    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#290f79",
      },
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#3c7b03",
      },
    },
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "#2b5a00",
        fontStyle: "italic",
        fontWeight: "400"
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
      ],
      style: {
        color: "#971111",
        fontWeight: "600",
      },
    },
    {
      types: [
        "variable",
        "function"],
      style:{
        color: "#8000c7",
      }
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#880c31",
      },
    },
    { // New group for punctuation (light gray)
      types: ["punctuation", "operator"],
      style: {
        color: "#01263a",
      },
    },
    { // New group for TypeScript specific tokens (cyan)
      types: ["type", "interface"],
      style: {
        color: "#65A2BD",
      },
    },
    { // New group for Java specific tokens (magenta)
      types: ["annotation", "package"],
      style: {
        color: "#8000c7",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "#103600",
        backgroundColor:"rgba(84,255,0,0.19)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#670e0e",
        backgroundColor: "rgba(255,0,0,0.13)",
      },
    }
  ],
}
export default theme


