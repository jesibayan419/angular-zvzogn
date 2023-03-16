export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple Phone (iPhone)',
    price: 799,
    description: 'It has a good camera, das it.',
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204'
  },
  {
    id: 2,
    name: 'Samsung Phone',
    price: 699,
    description: 'Like iPhone, but not iPhone.',
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg'
  },
  {
    id: 3,
    name: 'Xiaomi Phone',
    price: 299,
    description: 'You can get a good phone even if you are broke.',
    image: 'https://i.expansys.net/img/b/393175/xiaomi-13-5g-dual-sim.jpg'
  },

  {
    id: 4,
    name: 'Oppo Phone',
    price: 299,
    description: 'Meh, average phone for the price.',
    image: 'https://i.expansys.net/img/p/372317/oppo-reno-7-5g-dual-sim.jpg'
  },

  {
    id: 5,
    name: 'Vivo Phone',
    price: 299,
    description: 'Same as Oppo.',
    image: 'https://www.vivoglobal.ph/wp-content/uploads/2022/12/Y02-%E9%A2%9C%E8%89%B2%E5%9B%BE.jpg'
  },

  {
    id: 6,
    name: 'Realme Phone',
    price: 299,
    description: 'Had a spark when first started, but now iz just garbage.',
    image: 'https://i.expansys.net/img/p/374939/realme-gt-neo-2-5g-dual-sim.jpg'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/