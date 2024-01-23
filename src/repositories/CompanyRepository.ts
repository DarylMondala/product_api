import prisma from '../db';
import Company from '../models/company';
// import { IAddProductBody } from '../schemas/ProductSchemas';

export default class ProductRepository {
static createCompany = async (userData: Company) => {
    try {
      const createProduct = await prisma.company.create({
        data:{
            name: userData.name,
        },
      });
      return createProduct
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
  static getCompany = async() =>{
    const getoneCompany = await prisma.company.findMany({

    });
    return getoneCompany
  }
}