
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
  export const updateEmployeeHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as IEmployeeRequestBody;
      const targetLabel = await EmployeeRepository.updateEmployee(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const deleteEmployeeHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as IEmployeeRequestBody;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
      await EmployeeRepository.deleteEmployee(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };