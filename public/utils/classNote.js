export class Note {
  constructor(title, body) {
    this.title = title;
    this.body = body;
    this.id = new Date().valueOf();
    this.date = `${new Date()
      .toJSON()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("-")}`;
  }
}
