# witcher-names

[![Build Status](https://travis-ci.org/dqunbp/witcher-names.svg?branch=master)](https://travis-ci.org/dqunbp/witcher-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/dqunbp/witcher-names.svg?style=flat-square)](https://codecov.io/github/dqunbp/witcher-names)
[![version](https://img.shields.io/npm/v/witcher-names.svg?style=flat-square)](http://npm.im/witcher-names)
[![downloads](https://img.shields.io/npm/dm/witcher-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=witcher-names&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/witcher-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random names from Witcher characters.

## Installation

This package is distributed via npm:

```
npm install witcher-names
```

## Usage

```javascript
var names = require("witcher-names");
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```
