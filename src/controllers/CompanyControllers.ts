
import { FastifyReply, FastifyRequest } from 'fastify';
import { ICompanyRequestBody } from '../schemas/CompanySchemas';
import  CompanyRepository  from '../repositories/CompanyRepository'

export const addcompanyHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    const requestBody = request.body as ICompanyRequestBody;
  
    if (
      !requestBody ||
      !requestBody.name ||
      !requestBody
    ) {
      return reply.badRequest(
        `Invalid request body. Required fields: 'name'`
         );
    }
    try {
     const addCompany = await CompanyRepository.createCompany({
            name: requestBody.name,
        });
        return reply.send ({
            data: addCompany
        });
    }catch (error) {
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const getCompanyHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
        const getCompany = await CompanyRepository.getCompany();
      
        return reply.send ({
            labels: getCompany
        });
    } catch (error) {
        console.error (`GetEmployeeHandler:error trying to read labels: ${error}`);
        reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const updateCompanyHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const query = request.body as ICompanyRequestBody;
      const targetLabel = await CompanyRepository.updateCompany(query);
      return reply.send(targetLabel);
  
    } catch (error) {
      console.error(`updateLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(String(error || 'Unknown error occurred.'));
    }
  };
  export const deleteCompanyHandler = async (
    request: FastifyRequest,
    reply: FastifyReply
  ) => {
    try {
      const requestParams = request.params as ICompanyRequestBody;
      requestParams.id = Number(requestParams.id);
      if (!requestParams || !requestParams.id) {
        return reply.badRequest(
          "Missing or invalid request body. Required fields: 'id'"
        );
      }
      await CompanyRepository.deleteCompany(requestParams.id);
  
      return reply.send({
        message: 'Label has been removed successfully.',
      });
  
    } catch (error) {
      console.error(`deleteLabelHandler: error trying to update label: ${error}`);
      reply.internalServerError(JSON.stringify(error));
    }
  };
  