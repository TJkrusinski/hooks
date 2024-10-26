# Hooks

A collection of hooks that I often use in react projects. The repo is setup to be tree shake friendly.

Install:

```shell
$ npm i @tjkrusinski/hooks
```

### Available hooks

- [useArrayItemLoop](#useArrayItemLoop)
- [useInterval](#useInterval)
- [useMatchMedia](#useMachMedia)

## `useArrayItemLoop`

```ts

import {useArrayItemLoop} from '@tjkrusinski/hooks';

// in your component...
const current = useArrayItemLoop(['first.jpg', 'second.jpg', 'third.jpg'], 200);
```

Will fire every 200ms, each time with `current` being the successive item in the array. 

## `useInterval`

```ts

import {useInterval} from '@tjkrusinski/hooks';

// in your component...
useInterval(() => {
  console.log('print ever 200ms');
}, 200);

```

The classic non-intuitive useInterval hook.

## `useMatchMedia`

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

## License

Hooks' license is MIT. See the [license file](https://github.com/TJkrusinski/hooks?tab=MIT-1-ov-file) for more information.
