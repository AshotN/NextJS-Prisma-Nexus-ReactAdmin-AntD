# Migration `20201012025044-create-user`

This migration has been generated by Ashot Nazaryan at 10/11/2020, 7:50:44 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "TestSchema"."User" (
"id" SERIAL,
"name" text   NOT NULL ,
"city" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201012025044-create-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id          Int    @default(autoincrement()) @id
+  name        String
+  city		 String
+}
```


