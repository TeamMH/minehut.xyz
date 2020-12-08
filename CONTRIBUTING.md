# Contribute

If you want to write a new article, please read this thoroughly.
If you want to change code, you don't need to read this.

## About markdown

Markdown is a simple markup language that is used for formatting text with simple syntax. We use this language because of its simplicity and popularity.

The library the site uses, [MDX](https://mdxjs.com), also lets you add **React components** to the code, giving us lots of new opportunities. This lets us bring in a component called `Hint` that looks like the green box at the bottom of the page. To use it, you first need to import it using:

```jsx
import Hint from "../src/Hint";
```

Note, however, that the path depends on the location of the file.

After that, you can type in the following anywhere in your markdown:

```md
<Hint style="success | info | warning | error">TEXT HERE</Hint>
```

<Hint style="warning">Inside a hint, only normal HTML will work. For example, instead of doing <inlineCode>**Hello World**</inlineCode>, you'd do <inlineCode>&lt;strong>Hello World&lt;/strong></inlineCode>.</Hint>

The `style` attribute will give you different colors and icons:

```md
<Hint style="success">This is a <inlineCode>success</inlineCode> hint.</Hint>

<Hint style="info">This is an <inlineCode>info</inlineCode> hint.</Hint>

<Hint style="warning">This is a <inlineCode>warning</inlineCode> hint.</Hint>

<Hint style="error">This is an <inlineCode>error</inlineCode> hint.</Hint>
```

[Here's the template you must follow.](/TEMPLATE.md)
