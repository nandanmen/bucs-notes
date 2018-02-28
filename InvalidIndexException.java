public class InvalidIndexException extends RunTimeException {

  public InvalidIndexException(int index) {
    super('The index ' + index + ' is not a valid index.');
  }

}
