export default class CheckElementForm {
  public static execute(elements) {
    Object.values(elements).forEach(function (element) {
      if (element.isRequired != undefined && element.isRequired == true) {
        element.isValid()
      }
    })
  }
}
