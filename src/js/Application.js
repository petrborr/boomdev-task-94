import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const emojiDisplay = document.getElementById("emojis")
    const p = document.createElement("p")
    p.textContent = this.emojis
    emojiDisplay.innerHTML = ""
    emojiDisplay.appendChild(p)
  }

  addBananas() {
    this.emojis = this.emojis.map(e => e + this.banana)
    console.log(this.emojis)
    this.setEmojis(this.emojis)
  }
}
