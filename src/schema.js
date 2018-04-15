import { mergeTypes } from 'merge-graphql-schemas';

import userSchema from './user/userSchema';

const types = [
  userSchema,
];

const schema = mergeTypes(types, { all: true });

export default schema;
