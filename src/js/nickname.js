export default class Validator {
  constructor(userName) {
    this.name = userName;
  }

  validateUsername() {
    const check1 = /^[-_a-z0-9]+$/i.test(this.name);
    const check2 = /^[^-_0-9][-_a-z0-9]+[^-_0-9]$/i.test(this.name);
    const check3 = /[0-9]{4,}/.test(this.name);
    return check1 && check2 && !check3;
  }
}
