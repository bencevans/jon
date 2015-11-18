# Jon [![Build Status](https://img.shields.io/travis/bencevans/jon.svg?style=flat-square)](https://travis-ci.org/bencevans/jon) [![Coverage Status](https://img.shields.io/coveralls/bencevans/jon.svg?style=flat-square)](https://coveralls.io/r/bencevans/node-compact2string?branch=master)

> CLI JSON file manipulator.

## Install

    $ npm install --global jon

## Usage

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

    $ jon package.json scripts.start
    "node app.js"

    $ jon package.json scripts.test "make test"


## Licence

MIT © [Ben Evans](http://bensbit.co.uk)
