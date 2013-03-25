# jon

Get & Set JSON Objects without killing the planet!

Ever wanted to just update a value in a JSON file without opening... finding... replacing? Now you can do it using the familiar JavaScript notation from your terminal.

command:

    jon [json file] [identifier] [value]

getting:

    $ jon package.json name
    'jon'

    $ jon package.json dependencies
    {
      "optimist": "~0.3.5",
    }

setting:

    $ jon config.json proxy {host:'127.0.0.1',port:8080}

