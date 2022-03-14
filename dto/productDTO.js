class ProductDTO {
  constructor(_id, title, price, thumbnail) {
    this._id = _id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  getId() {
    return this._id;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  getThumbnail() {
    return this.thumbnail;
  }
}

module.exports = ProductDTO;
