export class Product {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.unitPrice = 0;
    this.imageUrl = '';
  }
}
