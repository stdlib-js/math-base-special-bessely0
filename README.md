<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# y0

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [Bessel function of the second kind][bessel-second-kind] of order zero.

<section class="intro">

The [Bessel function of the second kind][bessel-second-kind] of order zero is defined as

<!-- <equation class="equation" label="eq:bessel_second_kind_order_zero" align="center" raw="Y_0(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta) \, d\theta -\frac{2}{\pi} \int_0^\infty  e^{-x \sinh t} \, dt." alt="Bessel function of the second kind of order zero"> -->

```math
Y_0(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta) \, d\theta -\frac{2}{\pi} \int_0^\infty  e^{-x \sinh t} \, dt.
```

<!-- <div class="equation" align="center" data-raw-text="Y_0(x) = \frac{1}{\pi} \int_0^\pi \sin(x \sin\theta) \, d\theta -\frac{2}{\pi} \int_0^\infty  e^{-x \sinh t} \, dt." data-equation="eq:bessel_second_kind_order_zero">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/bessely0/docs/img/equation_bessel_second_kind_order_zero.svg" alt="Bessel function of the second kind of order zero">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
y0 = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-bessely0@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-bessely0/tags). For example,

```javascript
y0 = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-bessely0@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var y0 = require( 'path/to/vendor/umd/math-base-special-bessely0/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-bessely0@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.y0;
})();
</script>
```

#### y0( x )

Computes the [Bessel function of the second kind][bessel-second-kind] of order zero at `x`.

```javascript
var v = y0( 0.0 );
// returns -Infinity

v = y0( 1.0 );
// returns ~0.088

v = y0( Infinity );
// returns 0.0
```

If `x < 0` or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = y0( -1.0 );
// returns NaN

v = y0( -Infinity );
// returns NaN

v = y0( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-bessely0@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu() * 10.0;
    console.log( 'y0(%d) = %d', x, y0( x ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/besselj0`][@stdlib/math/base/special/besselj0]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order zero.</span>
-   <span class="package-name">[`@stdlib/math-base/special/besselj1`][@stdlib/math/base/special/besselj1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the first kind of order one.</span>
-   <span class="package-name">[`@stdlib/math-base/special/bessely1`][@stdlib/math/base/special/bessely1]</span><span class="delimiter">: </span><span class="description">compute the Bessel function of the second kind of order one.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-bessely0.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-bessely0

[test-image]: https://github.com/stdlib-js/math-base-special-bessely0/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/math-base-special-bessely0/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-bessely0/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-bessely0?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-bessely0.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-bessely0/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-bessely0/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-bessely0/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-bessely0/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-bessely0/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-bessely0/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-bessely0/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-bessely0/blob/main/branches.md

[bessel-second-kind]: https://en.wikipedia.org/wiki/Bessel_function#Bessel_functions_of_the_second_kind:_Y.CE.B1

<!-- <related-links> -->

[@stdlib/math/base/special/besselj0]: https://github.com/stdlib-js/math-base-special-besselj0/tree/umd

[@stdlib/math/base/special/besselj1]: https://github.com/stdlib-js/math-base-special-besselj1/tree/umd

[@stdlib/math/base/special/bessely1]: https://github.com/stdlib-js/math-base-special-bessely1/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
