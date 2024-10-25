# Hooks

Install:
```
$ npm i @tjkrusinski/hooks
```

### `useMatchMedia`

```ts

import {useMatchMedia} from '@tjkrusinski/hooks';

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