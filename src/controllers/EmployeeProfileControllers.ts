import { FastifyReply, FastifyRequest } from 'fastify';
import { IEmployeeProfileRequestBody } from '../schemas/EmployeeProfileSchemas';
import EmployeeProfileRepository from '../repositories/EmployeeProfileRepository';

export const addemployeeprofileHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const requestBody = request.body as IEmployeeProfileRequestBody;
  
    if (
      !requestBody ||
      !requestBody.employee_name ||
      !requestBody.position ||
      !requestBody.salary ||
      !requestBody.employee_id ||
      !requestBody
    ) {
      return reply.badRequest(
        `Invalid request body. Required fields: 'employee_name', 'position', 'salary', 'employee_id'`
         );
    }
    try {
     const addEmployeeProfile = await EmployeeProfileRepository.addEmployeeProfile({
            employee_name: requestBody.employee_name,
            position: requestBody.position,
            salary: requestBody.salary,
            employee_id: requestBody.employee_id,
        });
        return reply.send ({
            data: addEmployeeProfile
        });
    }catch (error) {
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const readAllemployeeprofileHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
        const targetLabels = await EmployeeProfileRepository.viewEmployeeProfile();
      
        return reply.send ({
            labels: targetLabels
        });
    } catch (error) {
        console.error (`GetEmployeeProfileHandler:error trying to read labels: ${error}`);
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const updateEmployeeProfileHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as IEmployeeProfileRequestBody;
      const targetLabel = await EmployeeProfileRepository.updateEmployeeProfile(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const deleteEmployeeProfileHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as IEmployeeProfileRequestBody;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
  
      await EmployeeProfileRepository.deleteEmployeeProfile(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };

 
