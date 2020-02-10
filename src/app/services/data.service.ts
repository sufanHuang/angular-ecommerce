import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Filter {
  showOnlySale?: boolean;
  category?: string;
  highPrize?: number;
}

export class SaleItem {
  id?: number;
  name?: string;
  sale?: boolean;
  img?: string;
  price?: number;
  category?: string;
  article?: string;
}

export class CartItem extends SaleItem {
  count? = 0;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() {}
  getObservaleProducts(sort:Filter){
    return of (this.getProducts()). pipe(
      map( products => {
        return !sort
          ? products
          : products.filter( item =>{
            const result_sort = sort.showOnlySale
              ? sort.showOnlySale === item.sale
              : true;

            const result_prize = sort.highPrize
              ? sort.highPrize <= item.price
              : true;

            const result_category = sort.category
              ? sort.category === item.category
              : true;

            return result_category && result_sort && result_prize;
          });
      })
    );
  }

  getObservableCart(): Observable<CartItem[]> {
    return of(this.getCart());
  }

  async addToCart(item: SaleItem) {
    const items: SaleItem[] = this.getCart();
    items.push(item);
    await localStorage.setItem('Cart', JSON.stringify(items));
  }

  async isinCart(id: number) {
    const items = this.getCart();
    const result = await items.map(item => {
      return item.id === id;
    });
    return result.includes(true);
  }

  getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('Cart') || '[]');
  }

  getProducts(): SaleItem[] {
    return [
      {
        id: 1,
        name: 'Adidas Orange',
        price: 149.99,
        category: 'women',
        sale: true,
        article: 'shoe',
        img: 'img1.jpg'
      },
      {
        id: 2,
        name: 'Adidas Pink',
        price: 39.99,
        category: 'women',
        sale: false,
        article: 'shoe',
        img: 'img2.jpg'
      },
      {
        id: 3,
        name: 'Adidas Flat Pink',
        price: 49.99,
        category: 'women',
        sale: true,
        article: 'shoe',
        img: 'img3.jpg'
      },
      {
        id: 4,
        name: 'Adidas Grey',
        price: 32.99,
        category: 'women',
        sale: true,
        article: 'shoe',
        img: 'img4.jpg'
      },
      {
        id: 5,
        name: 'Asics Grey and Blue',
        price: 29.99,
        category: 'women',
        sale: false,
        article: 'shoe',
        img: 'img5.jpg'
      },
      {
        id: 6,
        name: 'Merell Red and Grey',
        price: 38.99,
        category: 'women',
        sale: false,
        article: 'shoe',
        img: 'img6.jpg'
      },
      {
        id: 7,
        name: 'Nike Gey and Pink',
        price: 28.99,
        category: 'women',
        sale: false,
        article: 'shoe',
        img: 'img7.jpg'
      },
      {
        id: 8,
        name: 'New Balance Grey',
        price: 49.99,
        category: 'women',
        sale: false,
        article: 'shoe',
        img: 'img8.jpg'
      },
      {
        id: 9,
        name: 'Nike Black',
        price: 59.99,
        category: 'men',
        sale: true,
        article: 'shoe',
        img: 'img9.jpg'
      },
      {
        id: 10,
        name: 'Nike Blue',
        price: 129.99,
        category: 'men',
        sale: false,
        article: 'shoe',
        img: 'img10.jpg'
      },
      {
        id: 11,
        name: 'Saucory Grey',
        price: 80.99,
        category: 'men',
        sale: false,
        article: 'shoe',
        img: 'img11.jpg'
      },
      {
        id: 12,
        name: 'Hoka Blue',
        price: 59.99,
        category: 'men',
        sale: true,
        article: 'shoe',
        img: 'img12.jpg'
      }
    ];
  }
}


