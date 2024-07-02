/**
 * students location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students
 * @param {String} city
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
