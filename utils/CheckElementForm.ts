export default class CheckElementForm {
  public static execute(elements) {
    let isValid= []
    Object.values(elements).forEach(function (element) {
      if (element.isRequired != undefined && element.isRequired == true) {
        element.isValid()
        isValid.push(element.valid)
      }
    })
    return isValid
  }
}
