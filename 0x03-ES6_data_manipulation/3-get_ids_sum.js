/**
 * the sum of ids
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
