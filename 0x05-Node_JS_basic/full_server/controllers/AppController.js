/**
 * Contains the miscellaneous route handlers.
 * @author Asmaa Hesham <https://github.com/Asmaa26189>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
