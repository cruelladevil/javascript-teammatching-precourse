class Crew {
  #course;
  #name;

  constructor(name, course) {
    this.#name = name;
    this.#course = course;
  }

  getName() {
    return this.#name;
  }
}
