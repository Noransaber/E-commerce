// app/products/[id]/generateStaticParams.ts
import fs from 'fs';
import path from 'path';

const getProductsData = () => {
  const filePath = path.join(process.cwd(), 'app/data/flower_products.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const generateStaticParams = async () => {
  const products = getProductsData();
  return products.map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
};
