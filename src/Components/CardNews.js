class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.classList.add("card");

    const cardLeft = document.createElement("div");
    cardLeft.classList.add("card__left");

    const cardRight = document.createElement("div");
    cardRight.classList.add("card__right");

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
    cardLeft.appendChild(autor);

    const link = document.createElement("a");
    link.textContent = this.getAttribute("title") || "Anonymous";
    link.href = this.getAttribute("link-url") || "#";
    cardLeft.appendChild(link);

    const texto = document.createElement("p");
    cardLeft.appendChild(texto);
    texto.textContent = this.getAttribute("texto");

    const img = document.createElement("img");
    cardRight.appendChild(img);
    img.alt = this.getAttribute("img-alt");
    img.src = this.getAttribute("photo") || "./assets/img-default.png";

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
    .card { 
      width: 100%;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      border-radius: .5rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      color: #343434;
      margin-bottom: 20px;
    }

    .card__left {
      width: 50%;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    
    .card__left > span {
      font-size: .75rem;
    }
    
    .card__left > a {
      font-size: 1.6rem;
      margin-bottom: 20px;
      text-decoration: none;
      color: orange;
      font-weight: 600;
    }
    
    .card__right {
      width: 50%;
      padding: 20px;
    }
    
    .card__right > img {
      width: 100%;
      height: 100%;
      border-radius: .5rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.25);
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);

// "https://picsum.photos/200/300") + "?grayscale"
