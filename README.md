# ShadowRoot.getSelection Polyfill

Provides missing `ShadowRoot.elementFromPoint` implementation in IE 11 ([ShadyDom](https://github.com/webcomponents/shadydom/issues/141)).

It should be safe to apply in any browser using ShadyDom, as ShadowRoot will be patched only if it is present and missing the `elementFromPoint` method, but the patch is only known to work in IE 11.

## Installation

```
npm install shadow-root-element-from-point-polyfill
```

or

```
yarn add shadow-root-element-from-point-polyfill
```

## Usage

```js
import { patch } from 'shadow-root-element-from-point-polyfill';
patch();
```
