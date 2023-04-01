## Node.js + TS + Prisma Boilerplate

### Migration

Initialize @prisma/client

```sh
npm run db:generate
```

To add migration file.

1. modify `schema.prisma`
   ```sh
   npm run db:migrate -- --name {file_name} --create-only
   ```
2. check and modify `{file_name.sql}`
3. push to database
   ```sh
   npm run db:push
   ```
