# Big Bang Challenge

This TypeScript script generates an array of numbers from 1 to 100, replacing:
- Numbers divisible by 3 with "BIG"
- Numbers divisible by 5 with "BANG"
- Numbers divisible by both 3 and 5 with "BIGBANG"

## Prerequisites

- Node.js
- TypeScript

## Setup

1. Install TypeScript:
```bash
npm install -g typescript
```

2. Install type definitions for Node.js:
```bash
npm install --save-dev @types/node
```

## Running the Script

1. Compile the TypeScript file:
```bash
tsc big-bang.ts
```

2. Run the compiled JavaScript:
```bash
node big-bang.js
```

The script will generate an `output.json` file in the same directory.
