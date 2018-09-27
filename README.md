# throttle

[![NPM version](https://img.shields.io/npm/v/@zcorky/throttle.svg?style=flat)](https://www.npmjs.com/package/@zcorky/throttle)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/throttle.svg?style=flat)](https://coveralls.io/r/zcorky/throttle)
[![Dependencies](https://david-dm.org/@zcorky/throttle/status.svg)](https://david-dm.org/@zcorky/throttle)
[![Build Status](https://travis-ci.com/zcorky/throttle.svg?branch=master)](https://travis-ci.com/zcorky/throttle)
![license](https://img.shields.io/github/license/zcorky/throttle.svg)
[![issues](https://img.shields.io/github/issues/zcorky/throttle.svg)](https://github.com/zcorky/throttle/issues)

> Throttle a function.

### Install

```
$ npm install @zcorky/throttle
```

### Usage

```javascript
// import
import throttle from '@zcorky/throttle';

// throttle
function resize(e) {
  console.log('width', window.innerWidth);
  console.log('height', window.innerHeight);
}

window.onresize = throttle(resize, 200);
```

### Relatived
* [throttle](https://github.com/component/throttle)
* [blog: throttle](https://github.com/mqyqingfeng/Blog/issues/26)
