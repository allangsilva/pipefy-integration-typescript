# pipefy-integration-typescript
A Pipefy API integration using typescript

API Reference https://api-docs.pipefy.com/reference/objects/Card/

# Environments
`node -v` - v12.x

`yarn -v` - 1.16.x

# Running local
`yarn` to install local *node_modules*

`yarn dev:server` to listen on port 3333

# Build
`yarn build` to create *dist* folder on root project

# Test
- Create a *.env* file on root project based on *.env.sample*, after that change the values with your API credentials
- Call http://localhost:3333/cards/export
