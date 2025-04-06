This is a minimal reproduction of https://github.com/oven-sh/bun/issues/17833.

To run:

```sh
bun install

# native Bun on Linux
bun start

# Bun via Docker
docker compose up
```

The correct output should be:

```
bun start
$ bun run index.ts
Firebase initialized
[
  {
    "test-field": "test-value",
  }
]
```
