import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const applicationRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const application = await ctx.prisma.application.create({
        data: {
          name: input.name,
          description: "Describe the application",
        },
      });
      return application;
    }),
  readAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.application.findMany({ orderBy: { name: "asc" } });
  }),
  read: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.application.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        name: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const application = await ctx.prisma.application.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          description: input.description,
        },
      });
      return application;
    }),
  delete: publicProcedure
    .input(z.object({ id: z.string().cuid() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.application.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
