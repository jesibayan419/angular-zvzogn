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
    price: 89990,
    description: '6.6-inch Full HD+, Exynos 850, 128GB, 5000mAh',
    image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204'
  },
  {
    id: 2,
    name: 'Samsung Phone',
    price: 79990,
    description: 'Pre-Order | 6.7-inch Full HD+, MTK Helio G88, 128GB',
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647622740-samsung-galaxy-a53-1647622731.jpg'
  },
  {
    id: 3,
    name: 'Xiaomi Phone',
    price: 25990,
    description: 'Pre-Order | 6.7-inch Full HD+, MTK Helio G88, 128GB',
    image: 'https://i.expansys.net/img/b/393175/xiaomi-13-5g-dual-sim.jpg'
  },

  {
    id: 4,
    name: 'Oppo Phone',
    price: 20990,
    description: '6.43-inch Full HD+, Snapdragon 680, 128GB',
    image: 'https://i.expansys.net/img/p/372317/oppo-reno-7-5g-dual-sim.jpg'
  },

  {
    id: 5,
    name: 'Vivo Phone',
    price: 20990,
    description: '6.8-inch Full HD+, SD 8 Gen 2, 512GB, 5000mAh',
    image: 'https://www.vivoglobal.ph/wp-content/uploads/2022/12/Y02-%E9%A2%9C%E8%89%B2%E5%9B%BE.jpg'
  },

  {
    id: 6,
    name: 'Realme Phone',
    price: 19990,
    description: '6.4-inch Full HD+, Helio G99, 128GB, 5000mAh',
    image: 'https://i.expansys.net/img/p/374939/realme-gt-neo-2-5g-dual-sim.jpg'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/