import { company } from '@prisma/client';
import prisma from '../db';
import Company from '../models/company';

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
    const getoneCompany = await prisma.company.findMany({});
    return getoneCompany
  }
  static updateCompany = async (userData: company)=>{
    try{
      const updateLabel = await prisma.company.update({
        where: {
          id: userData.id,
        },
        data: {
          name: userData.name,
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteCompany = async (id:number) => {
    try {
      const deleteCompany = await prisma.company.delete({
        where:{
          id:id
        }
      })
      return deleteCompany;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createcompany = async (userData: company) => {
    try {
          await prisma.company.create({
            data: {
              id: userData.id,
              name: userData.name,
            },
          });
        }
     catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}