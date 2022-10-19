export class User {
  name;
  circle;
  fiverrLink;
  firstMessage;
  review = [];

  constructor(name, circle, link, firstMessage) {
    this.name = name;
    this.circle = circle;
    this.fiverrLink = link;
    this.firstMessage = firstMessage;
  }

  getUser() {
    return User;
  }
}
