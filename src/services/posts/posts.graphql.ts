import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
// eslint-disable-next-line import/no-cycle
import { getUser, UserType } from '../users';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(post: { userId: string }) {
        return getUser(post.userId);
      },
    },
  }),
});
