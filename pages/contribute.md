---
description: Learn how to contribute to Minehut.xyz
name: contribute
---

import Hint from "../src/Hint"

# Contribute

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

<Hint style="warning">Inside a hint, only normal HTML will work. For example, instead of doing <inlineCode>**Hello World**</inlineCode>, you'd do <inlineCode>&lt;strong>Hello World&lt;/strong></inlineCode></Hint>

The `style` attribute will give you different colors and icons:

<Hint style="success">This is a <inlineCode>success</inlineCode> hint</Hint>

<Hint style="info">This is an <inlineCode>info</inlineCode> hint</Hint>

<Hint style="warning">This is a <inlineCode>warning</inlineCode> hint</Hint>

<Hint style="error">This is an <inlineCode>error</inlineCode> hint</Hint>

```md
<Hint style="success">This is a <inlineCode>success</inlineCode> hint</Hint>

<Hint style="info">This is an <inlineCode>info</inlineCode> hint</Hint>

<Hint style="warning">This is a <inlineCode>warning</inlineCode> hint</Hint>

<Hint style="error">This is an <inlineCode>error</inlineCode> hint</Hint>
```

## How to contribute

You can contribute to minehut.xyz by making a [pull request at our GitHub](https://github.com/TeamMH/minehut.xyz). You will need a GitHub account for this.

## How to make a pull request

To make a pull request, you need to make a fork of the **minehut.xyz** repository.

To fork the repository, click the `Fork` button at the top right of the page.

A category is just a folder with the name of the category, navigate to the category you want to add a page to. From here, click `Add file`, and then `Create new file`. Create a file with a short name, and put `.md` after the name, \(ex. `functions.md`, `download-world.md`, etc.\), and then open the file.

From here, you can edit the file. [_**Here's**_](https://raw.githubusercontent.com/TeamMH/minehutxyz/master/template.md) _**our template you must follow.**_

This is an example page, and this is the source:

```md
---
description: Description
<!-- THE PATH TO THE FILE FROM THE `PAGES` DIRECTORY WITHOUT THE FILENAME AND FIRST SLASH -->
name: category/subcategory/filename
madeBy: NAME **OR** [NAME1, NAME2] FOR MULTIPLE PEOPLE
madeByLink: LINK **OR** [LINK1, LINK2] FOR MULTIPLE PEOPLE (OPTIONAL)
---

<!-- THE PATH TO THE `HINT` ELEMENT, LOCATED IN THE SRC DIRECTORY -->

import Hint from "../src/Hint";

# Title

## Section 1

Text

## Section 2

Text
```

To add a **description** to your page, add:

```md
---
description: Description for your page!
---
```

To add a **title** to your page, add:

```md
# title for your page
```

To add separate sections for your page, add:

```md
## Section

Put text here
```

You can, of course, put normal markdown in your page aswell. Once you're done making the page, click `Commit new file`.

Now you can make a pull request! Go to your repository, then click the button labeled `Pull request`, it should be right next to a `Compare` button. Then, click `Create pull request`. Tada! You have made a pull request to our repository, and your page will appear on the site if we accept it.

Note that you need to delete your fork and refork it to update it. There is no way to auto update it \(unless your editing loccally, which you can learn how to [here](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).
