import { FastifyPluginAsync } from "fastify";
import { IEmployeeRequestBody, IEmployeeResponseError, IEmployeeResponseSucessful } from "../../schemas/EmployeeSchemas";
import { addemployeeHandler, getEmployeeHandler } from "../../controllers/EmployeeControllers";

const employee: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: IEmployeeRequestBody;
      Reply: IEmployeeResponseSucessful | IEmployeeResponseError;
    }>('/', addemployeeHandler);

    fastify.get<{
        Querystring: IEmployeeRequestBody;
        Reply: IEmployeeResponseSucessful | IEmployeeResponseError;
      }>('/', getEmployeeHandler);
};
export default employee;