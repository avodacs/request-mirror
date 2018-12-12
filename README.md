# Request Mirror

[![](https://images.microbadger.com/badges/image/avodacs/request-mirror.svg)](https://microbadger.com/images/avodacs/request-mirror "Get your own image badge on microbadger.com") ![](https://img.shields.io/github/downloads/avodacs/request-mirror/total.svg?maxAge=2592000) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


HTTP request viewer, available at [https://rm.avodacs.com](https://rm.avodacs.com), or locally using [Docker](https://hub.docker.com/r/avodacs/request-mirror/).

## Features

* Make HTTP(S) requests and view the headers, querystring, and body
* HTTP and HTTPS support
* Use any trailing path
* Use any verb

## Check out our hosted version

We host the latest version of Request Mirror at [https://rm.avodacs.com](https://rm.avodacs.com).  Data expires after 4 hours, and the service is freely available for individuals and organizations.

## Run in development mode

Install dependencies:
`$ npm install`

Run using nodemon:
`$ npm run dev`

## Run in Docker

`$ docker run -p 8080:3000 avodacs/request-mirror`

## Resources

* [Changelog](CHANGELOG.md)
* [Contributing Guide](CONTRIBUTING.md)

## Credits

Request Mirror is inspired by [requestbin](https://github.com/Runscope/requestbin).

## License

[MIT](LICENSE.md)
