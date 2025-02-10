// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Lecture, Post, Comment, Event } = initSchema(schema);

export {
  User,
  Lecture,
  Post,
  Comment,
  Event
};