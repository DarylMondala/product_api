
import { FastifyReply, FastifyRequest } from 'fastify';
import { IEmployeeRequestBody } from '../schemas/EmployeeSchemas';
import EmployeeRepository from '../repositories/EmployeeRepository';

export const addemployeeHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const requestBody = request.body as IEmployeeRequestBody;
  
    if (
      !requestBody ||
      !requestBody.employee_id ||
      !requestBody.company_id ||
      !requestBody
    ) {
      return reply.badRequest(
        `Invalid request body. Required fields: 'employee_id', company_id`
         );
    }
    try {
     const addEmployee = await EmployeeRepository.addEmployee({
            employee_id: requestBody.employee_id,
            company_id: requestBody.company_id,
        });
        return reply.send ({
            data: addEmployee
        });
    }catch (error) {
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };

  export const getEmployeeHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
        const getEmployee = await EmployeeRepository.getEmployee();
      
        return reply.send ({
            labels: getEmployee
        });
    } catch (error) {
        console.error (`GetEmployeeHandler:error trying to read labels: ${error}`);
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
