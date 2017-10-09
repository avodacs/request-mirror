# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2017-10-08
### Changed
- `x-forwarded-proto` header is not displayed on inspection.

## [1.0.2] - UNRELEASED
### Changed
- Dropped direct usage of `clipboard.js` for copying the log URL, using vue-clipboard2 instead
- HTTP and HTTPS links are toggled from dropdown

## [1.0.1] - 2017-10-08
### Changed
- `x-forwarded-port`, `x-forwarded-for`, and `connection` headers are not displayed on inspection, to prevent showing headers added by HAProxy.
- Updated favicon
- Show both HTTP and HTTPS links on inspection page
- Added Google Analytics

## [1.0.0] - 2017-10-08
### Added
- Initial project files
