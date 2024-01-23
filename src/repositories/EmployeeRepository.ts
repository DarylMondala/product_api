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
}