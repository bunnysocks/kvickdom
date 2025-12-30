# kvickdom

A minimal virtual DOM implementation built for learning and experimental purpose.

This project explores how vDOM systems represent UI as plain JavaScript objects, render them to the real DOM, and efficiently update the UI using a diffing and patching algorithm.

## Features

* Virtual DOM node representation
* Declarative `createElement` API
* Rendering Virtual DOM to real DOM
* Mounting to a target element
* Diffing algorithm for efficient updates
* Attribute and children patching


## Purpose

This project is educational.

It is not intended for production use.

The focus is on understanding:

* how Virtual DOM diffing works
* how minimal DOM updates are applied
* why modern UI frameworks are structured the way they are


## Status

Work in progress.

Planned improvements include keyed diffing, event handling, lifecycle hooks, and component abstractions.


## License

[MIT](./LICENSE)