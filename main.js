import { CLOSE_ICON, MESSAGE_ICON, styles } from "./assets.js";

class MessageWidget {
  constructor() {
    this.initialize();
    this.injectStyles();
  }

  widgetContainer = null;

  async initialize() {
    this.createWidgetContent();
  }

  createWidgetContent() {
    var container = document.querySelector(".cart-drawer__footer");
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.innerHTML = `
  <div>
    
    <h3 style="text-align:left; margin: 1em">Choose your impact</h3>
    <div class="project" style="margin: 1em">
    <button class="btn"><i class="fa fa-home"></i></button>
    <button class="btn"><i class="fa-solid fa-hashtag"></i></button>
     <button class="btn"><i class="fa-sharp fa-solid fa-share-nodes"></i></button>
     <button class="btn"><i class="fa-solid fa-people-arrows"></i></button>
      </div>
    
    <div class="card">
    <div class="project">
    <span style="color:#666666; font-size: 12px"> Black Equity </span>
    <span style="color:#666666; font-size: 12px">Powered by Klean</span>
    </div>
    <p style="text-align: left; font-size: 16px">Fund 375 meals for dogs at a no-kill shelter in LA via Wags and Walks</p>
  </div>
  <div class="card">
  <div class="project">
  <span style="color:#666666; font-size: 12px"> Black Equity </span>
  <span style="color:#666666; font-size: 12px">Powered by Klean</span>
  </div>
  <p style="text-align: left;">Fund 375 meals for dogs at a no-kill shelter in LA via Wags and Walks</p>
</div>
<div class="card">
<div class="project">
<span style="color:#666666; font-size: 12px"> Black Equity </span>
<span style="color:#666666; font-size: 12px">Powered by Klean</span>
</div>
<p style="text-align: left;">Fund 375 meals for dogs at a no-kill shelter in LA via Wags and Walks</p>
</div>
   
  </div>
    `;
    container.appendChild(this.widgetContainer);
  }

  injectStyles() {
    const styleTag = document.createElement("style scoped");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");

    document.head.appendChild(styleTag);
  }
}

function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();
