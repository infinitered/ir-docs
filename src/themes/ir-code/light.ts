import type {PrismTheme} from "prism-react-renderer"

const theme: PrismTheme = {
  plain: {
    backgroundColor: "#fcf8f5",
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
        color: "#215e4d",
        fontWeight: "500",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#943800",
      },
    },
    {
      types: [
        "imports",
        "constant",
        "doctype",
        "builtin",
      ],
      style: {
        color: "#824425",
        fontWeight: "500"
      },
    },
    {
      types: [
        "property-access",
        "property",
        "variable",
        "function"
      ],
      style: {
        color: "#0a3862",
      },
    },

    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#4d5a07",
      },
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#355b04",
      },
    },
    {
      types: ["comment", "prolog", "cdata", "inserted"],
      style: {
        color: "#59469c",
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


