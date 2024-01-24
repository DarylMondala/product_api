import prisma from '../db';
import Employee_Profile from '../models/employeeprofile';


export default class EmployeeProfileRepository {
static addEmployeeProfile = async (userData:Employee_Profile) => {
    try {
      const addEmployeeProfile = await prisma.employee_profile.create({
        data:{
            employee_name: userData.employee_name,
            position: userData.position,
            salary: userData.salary,
            employee_id: userData.employee_id,
        },
      });
      return addEmployeeProfile
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
  static viewEmployeeProfile = async() =>{
    try {
    const allLabels = await prisma.employee_profile.findMany({});

    return allLabels;
  } catch (error) {
    throw String(error || 'Unknown error occured.');
  }
}
static updateEmployeeProfile = async (userData: Employee_Profile)=>{
    try{
      const updateLabel = await prisma.employee_profile.update({
        where: {
          id: userData.id,
        },
        data: {
          employee_name: userData.employee_name,
          position: userData.position,
          salary: userData.salary,
            employee_id: userData.employee_id
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteEmployeeProfile = async (id:number) => {
    try {
      const deleteEmployeeProfile = await prisma.employee_profile.delete({
        where:{
          id:id
        }
      })
      return deleteEmployeeProfile;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createemployee_profile = async (userData: Employee_Profile) => {
    try {

          await prisma.employee_profile.create({
            data: {
                employee_name: userData.employee_name,
                position: userData.position,
                salary: userData.salary,
              employee_id: userData.employee_id,
    
            },
          });
        }
     catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}