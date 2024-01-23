import { FastifyPluginAsync } from "fastify";
import { ICOmpanyResponseError, ICompanyRequestBody, ICompanyResponseSucessful } from "../../schemas/CompanySchemas";
import { addcompanyHandler, getCompanyHandler } from "../../controllers/CompanyControllers";



const company: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: ICompanyRequestBody;
      Reply: ICompanyResponseSucessful | ICOmpanyResponseError;
    }>('/', addcompanyHandler);
    
    fastify.get<{
      Querystring: ICompanyRequestBody;
      Reply: ICompanyResponseSucessful | ICOmpanyResponseError;
    }>('/', getCompanyHandler);
};
export default company;