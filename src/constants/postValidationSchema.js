import * as yup from 'yup';

const postValidationSchema = yup.object({
  title: yup
    .string('Enter a title')
    .min(3, 'Title should be more then 3 characters')
    .required('Title is required'),
  text: yup
    .string('Enter your text')
    .min(10, 'Post text should be of minimum 10 characters length')
    .required('Text is required'),
});

export default postValidationSchema;
