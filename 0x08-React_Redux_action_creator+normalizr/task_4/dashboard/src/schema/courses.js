import { normalize, schema } from 'normalizr';

const courseSchema = new schema.Entity('courses');

export const normalizeCourses = (data) => {
  return normalize(data, [courseSchema]);
};
