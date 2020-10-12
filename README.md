# Thanks to https://github.com/leighhalliday/prisma-nexus-demo

A quick boiler plate using Next.JS, AntD, Prisma/Nexus, and ReactAdmin!

## Gotchas

- Don't install your own `@prisma/cli` and `@prisma/client` packages
- Don't forget to add **all** your types to your schema
- Don't forget the `--experimental` flag for Prisma migrations
- Don't forget the `experimentalCRUD` option to allow for crud operations

Order of Prisma commands:

- `yarn prisma init`
- `yarn prisma migrate save --experimental`
- `yarn prisma migrate up --experimental`
- `yarn generate:prisma`
