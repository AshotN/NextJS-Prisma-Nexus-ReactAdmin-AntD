import { makeSchema, queryType, objectType, mutationType } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";
import { addCrudResolvers } from "@ra-data-prisma/backend";
import path from "path";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.city();
  },
});

const Query = queryType({
  definition(t) {
    t.crud.user();

    t.crud.users({ pagination: true, filtering: true });

    // t.field("company", {
    //   type: Company,
    //   nullable: true,
    //   args: {
    //     id: idArg(),
    //   },
    //   resolve: (_root, { id }, ctx) => {
    //     return ctx.prisma.company.findOne({ where: { id: Number(id) } });
    //   },
    // });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser();
  },
});

export const schema = makeSchema({
  types: [Query, User, addCrudResolvers("User"), Mutation],
  // CRUD won't work without this option!!!
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true, // required!
      paginationStrategy: "prisma", // required!
      outputs: {
        typegen: path.join(process.cwd(), "nexus.ts"),
      },
    }),
  ],
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: require.resolve("./context"),
        alias: "Context",
      },
    ],
  },
});
