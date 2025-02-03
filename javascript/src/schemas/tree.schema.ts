// tree.schema.ts

import * as yup from 'yup';

export const postTree = yup.object({
  parent: yup.string().required(),
  label: yup.string().required(),
});
