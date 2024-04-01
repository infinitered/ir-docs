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
        color: "#023C2E",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#c94c00",
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
        color: "#833000",
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
        color: "#00624a",
      },
    },

    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#67790a",
      },
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#3f6b00",
      },
    },
    {
      types: ["comment", "prolog", "cdata", "inserted"],
      style: {
        color: "#a16600",
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
        color: "#ce261a",
      },
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#91324c",
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


