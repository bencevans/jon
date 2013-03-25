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

    $ jon package.json dependencies.debug
    "~0.7.2"

setting (currently string only):

    $ jon config.json proxy "127.0.0.1:8080"
    "127.0.0.1:8080" # JSON Parsed & Stringified Value (to check)

## Example

    $ jon package.json name
    "like-a-boss-bootstrap"
    $ jon package.json name too-jazzy
    "too-jazzy"
    $ jon package.json description "Play's jazzy tunes"
    "Play's jazzy tunes"
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

MIT
