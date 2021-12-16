export default class ReplaceParamsUrlLink {
  public static execute(url, parameters) {
    Object.entries(parameters).forEach(function (parameter) {
      url = url.replace(':' + parameter[0], parameter[1])
    })
    return url;
  }
}
