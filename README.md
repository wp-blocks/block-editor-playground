# Block Editor Playground

An example of using the `@wordpress/block-editor` outside of Gutenberg and Wordpress.

## Issues

- `@wordpress/block-library` reference `process.env`. Solution use `@rollup/plugin-replace` to replace it.

## Inspiration

- [Automattic Isolated Block Editor](https://github.com/Automattic/isolated-block-editor)
- [Gutenberg Storybook Playground](https://github.com/WordPress/gutenberg/tree/00cfd4baa4efdfb7bf50255e2d4088dcbafa8667/storybook/stories/playground)
- [Standalone Block Editor](https://github.com/getdave/standalone-block-editor)
- [Drupal Gutenberg](https://git.drupalcode.org/project/gutenberg/-/blob/8.x-2.x/js/gutenberg.es6.js#L501-698)
