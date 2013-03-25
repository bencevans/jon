# Jon

JSON Get/Set CLI Tool.

Ever wanted to just update or get a value from a JSON file without opening... finding... replacing? Now you can using the familiar JavaScript notation from your terminal.

command:

    jon <json file path> <identifier> [value]

getting:

    $ jon package.json name
    'jon'

    $ jon package.json dependencies
    {
      "debug": "~0.7.2",
      "optimist": "~0.3.5"
    }

setting (currently string only):

    $ jon config.json proxy "127.0.0.1:8080"

## Example

    $ jon package.json name
    "like-a-boss-bootstrap"
    $ jon package.json name too-jazzy
    $ jon package.json description "Play's jazzy tunes"
    $ jon package.json
    {
      "name": "too-jazzy",
      "description": "Play's jazzy tunes"
    }
    $ jon package.json description
    "Play's jazzy tunes"

## Install

Assuming you have [Node.js (& npm)](http://nodejs.org) installed.

```bash
npm install -g jon
```
## Links

Module: [GitHub](https://github.com/bencevans/jon) [npm](https://npmjs.org/package/jon)

Author: [Twitter](https://twitter.com/bencevans)

## Licence

(MIT Licence)

Copyright (c) 2013 Ben Evans <ben@bensbit.co.uk>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
