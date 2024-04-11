import type {PrismTheme} from "prism-react-renderer"

const theme: PrismTheme = {
  plain: {
    backgroundColor: "#f2efef",
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
        color: "#1c5a49",
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
        color: "#863301",
        fontWeight: "400"
      },
    },
    {
      types: [
        "property-access",
        "property",
      ],
      style: {
        color: "#0a3862",
      },
    },
    {
      types: [
        "variable",
        "function"],
      style:{
        color: "#156851",
        fontWeight: "400"
      }
    },
    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#4a5407",
      },
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#335803",
      },
    },
    {
      types: ["comment", "prolog", "cdata", "inserted"],
      style: {
        color: "#544292",
        fontStyle: "italic",
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
        color: "#971111",
        fontWeight: "400"
      },
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
  ],
}
export default theme


