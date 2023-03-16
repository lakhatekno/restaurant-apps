class ReviewCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('nama');
    const comment = this.getAttribute('komentar');
    const date = this.getAttribute('tanggal');

    this.innerHTML = `
      <h5 tabindex="0">${name}</h5>
      <p class="customer-review" tabindex="0">"${comment}"</p>
      <p class="review-date">${date}</p>
    `;
  }
}

customElements.define('review-card', ReviewCard);