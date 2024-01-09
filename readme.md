# Typescript testing with Jest

Test a simple function with jest.
Compiles source and runs test typescript files with multiple config files.

## Preqs

- NodeJs

## Startup commands

### Init project

- `npm install`

### Console 1

This console will watch and build the source files

- `tsc -w -p .\tsconfig.build.json`

### Console 2

This console will watch the test files and run test

- `npx jest --watch`

### Console 3

This console will watch for all .ts files and run eslint

- `npx eslint-watch -w ".\src\**" ".\tests\**"`
