import { employee } from '@prisma/client';
import prisma from '../db';
import Employee from '../models/employee';


export default class ProductRepository {
static addEmployee = async (userData:Employee) => {
    try {
      const addEmployee = await prisma.employee.create({
        data:{
            employee_id: userData.employee_id,
            company_id: userData.company_id,
        },
      });
      return addEmployee
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };

  static getEmployee = async() =>{
    const getoneEmployee = await prisma.employee.findMany({

    });
    return getoneEmployee
  }
  static updateEmployee = async (userData: employee)=>{
    try{
      const updateLabel = await prisma.employee.update({
        where: {
          id: userData.id,
        },
        data: {
          employee_id: userData.employee_id,
          company_id: userData.company_id
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteEmployee = async (id:number) => {
    try {
      const deleteEmployee = await prisma.employee.delete({
        where:{
          id:id
        }
      })
      return deleteEmployee;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createemployee = async (userData: employee) => {
    try {
          await prisma.employee.create({
            data: {
              id: userData.id,
              employee_id: userData.employee_id,
              company_id: userData.company_id,
            },
          });
        }
     catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}