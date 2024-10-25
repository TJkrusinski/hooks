# Hooks

A collection of hooks that I often use in react projects.

Install:

```shell
$ npm i @tjkrusinski/hooks
```

### Available hooks

- [useMatchMedia](#useMachMedia)

## `useMatchMedia`

```ts

import {useMatchMedia} from '@tjkrusinski/hooks';

// OR, if you really want to make sure it tree shakes
import useMatchmedia from '@tjkrusinski/hooks/dist/useMatchMedia';

// in your component...

const scheme = useMatchMedia();

if (scheme === 'light') {
  // do something given the color scheme is light
} else {
  // do something given the color scheme is dark
};

```

Returns a string of either `light` or `dark` based on the color scheme of the user's browser. Will fire if the scheme changes.

If used in a server component, the hook will always return `light`.

## License

Hooks' license is MIT. See the [license file](https://github.com/TJkrusinski/hooks?tab=MIT-1-ov-file) for more information.
