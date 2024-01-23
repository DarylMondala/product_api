
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
