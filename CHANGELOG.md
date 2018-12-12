# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.8] - 2018-12-12
### Changed
- Updated and backfilled CHANGELOG

## [1.0.7] - 2018-12-12
### Changed
- Updated `morgan` dependency to fix static security analysis warning
- Removed (currently) unused testing dependencies
- Updated README to reflect `rm.avodacs.com`
- Updated README to include Snyk badge

## [1.0.6] - 2018-04-01
### Changed
- Removed `.npmrc` for better dependency upgrading

## [1.0.5] - 2018-04-01
### Changed
- Updated `moment` and `pug` dependencies to fix static security analysis warning

## [1.0.4] - 2017-10-08
### Changed
- Request protocol pulls from `x-forwarded-proto` if available

## [1.0.3] - 2017-10-08
### Added
- Added features to index
- No entries helper text
- Basic contributing guide
- Data expires after 4 hours

### Changed
- Dropped direct usage of `clipboard.js` for copying the log URL, using vue-clipboard2 instead
- HTTP and HTTPS links are toggled from dropdown
- Updated README


## [1.0.2] - 2017-10-08
### Changed
- `x-forwarded-proto` header is not displayed on inspection.

## [1.0.1] - 2017-10-08
### Changed
- `x-forwarded-port`, `x-forwarded-for`, and `connection` headers are not displayed on inspection, to prevent showing headers added by HAProxy.
- Updated favicon
- Show both HTTP and HTTPS links on inspection page
- Added Google Analytics

## [1.0.0] - 2017-10-08
### Added
- Initial project files
