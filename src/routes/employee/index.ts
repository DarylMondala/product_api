import { FastifyPluginAsync } from "fastify";
import { IEmployeeRequestBody, IEmployeeResponseError, IEmployeeResponseSucessful } from "../../schemas/EmployeeSchemas";
import { addemployeeHandler, deleteEmployeeHandler, getEmployeeHandler, updateEmployeeHandler } from "../../controllers/EmployeeControllers";

const employee: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: IEmployeeRequestBody;
      Reply: IEmployeeResponseSucessful | IEmployeeResponseError;
    }>('/', addemployeeHandler);

    fastify.get<{
        Querystring: IEmployeeRequestBody;
        Reply: IEmployeeResponseSucessful | IEmployeeResponseError;
      }>('/', getEmployeeHandler);

      fastify.put<{
        Querystring: IEmployeeRequestBody;
        Reply: IEmployeeResponseSucessful | IEmployeeResponseError;
      }>('/', updateEmployeeHandler);

      fastify.delete<{
        Querystring: IEmployeeRequestBody;
        Reply: IEmployeeResponseSucessful | IEmployeeResponseError;
      }>('/:id', deleteEmployeeHandler);
};
export default employee;