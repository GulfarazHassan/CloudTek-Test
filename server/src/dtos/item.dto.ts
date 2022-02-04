import * as yup from 'yup';

export const createItemDto = yup.object().shape({
  title: yup.string().required(),
  photo: yup.string().required(),
  description: yup.string().required(),
  shortDescription: yup.string().required(),
});
