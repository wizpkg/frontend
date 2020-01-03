---
to: packages/components/src/index.js
inject: true
append: true
---
export { default as <%= h.changeCase.pascalCase(name) %> } from "./<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>";