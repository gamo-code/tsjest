# Typescript testing with Jest

Test a simple function with jest.
Compiles source and runs test typescript files with multiple config files.

## Preqs

- NodeJs

## Startup commands

### Init project

- `npm install`

### Console 1

This console will watch the build of the source files

- `tsc -w -p .\tsconfig.build.json`

### Console 2

This console will watch the test files

- `npx jest --watch`
