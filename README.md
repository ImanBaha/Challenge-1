# Big Bang Challenge

A TypeScript solution that generates numbers 1-100, replacing multiples of 3 with "BIG", multiples of 5 with "BANG", and multiples of both with "BIGBANG".

## Prerequisites

- Node.js (Download from [nodejs.org](https://nodejs.org))
- Git (Download from [git-scm.com](https://git-scm.com))

## Setup Instructions

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Initialize Node.js project:
```bash
npm init -y
```

3. Install dependencies:
```bash
npm install typescript @types/node --save-dev
```

4. Create TypeScript configuration:
```bash
npx tsc --init
```

5. Verify files exist:
- big-bang.ts
- tsconfig.json
- package.json

## Running the Script

1. Compile TypeScript to JavaScript:
```bash
npx tsc big-bang.ts
```

2. Run the compiled code:
```bash
node big-bang.js
```

## Output

The script generates `output.json` containing the array of numbers and words according to the specified rules.

## File Structure
```
.
├── README.md
├── big-bang.ts
├── tsconfig.json
├── package.json
└── output.json (generated)
```
