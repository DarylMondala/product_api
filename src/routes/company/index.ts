import { FastifyPluginAsync } from "fastify";
import { ICOmpanyResponseError, ICompanyRequestBody, ICompanyResponseSucessful } from "../../schemas/CompanySchemas";
import { addcompanyHandler, deleteCompanyHandler, getCompanyHandler, updateCompanyHandler } from "../../controllers/CompanyControllers";



const company: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: ICompanyRequestBody;
      Reply: ICompanyResponseSucessful | ICOmpanyResponseError;
    }>('/', addcompanyHandler);
    
    fastify.get<{
      Querystring: ICompanyRequestBody;
      Reply: ICompanyResponseSucessful | ICOmpanyResponseError;
    }>('/', getCompanyHandler);

    fastify.put<{
      Querystring: ICompanyRequestBody;
      Reply: ICompanyResponseSucessful | ICOmpanyResponseError;
    }>('/', updateCompanyHandler);

    fastify.delete<{
      Querystring: ICompanyRequestBody;
      Reply: ICompanyResponseSucessful | ICOmpanyResponseError;
    }>('/:id', deleteCompanyHandler);
};
export default company;