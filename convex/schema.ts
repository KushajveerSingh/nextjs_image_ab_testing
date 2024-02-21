import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  images: defineTable({
    title: v.string(),
    userId: v.string(),
  }),
  users: defineTable({
    userId: v.string(),
    email: v.string(),
  }),
});
