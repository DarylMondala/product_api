import { FastifyPluginAsync } from "fastify";
import { IEmployeeProfileRequestBody, IEmployeeProfileResponseError, IEmployeeProfileResponseSucessful } from "../../schemas/EmployeeProfileSchemas";
import { addemployeeprofileHandler, deleteEmployeeProfileHandler, readAllemployeeprofileHandler, updateEmployeeProfileHandler } from "../../controllers/EmployeeProfileControllers";
import { IEmployeeResponseError } from "../../schemas/EmployeeSchemas";


const employeeprofile: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post<{
      Querystring: IEmployeeProfileRequestBody;
      Reply: IEmployeeProfileResponseSucessful | IEmployeeProfileResponseError;
    }>('/', addemployeeprofileHandler);

    fastify.get<{
        Querystring: IEmployeeProfileRequestBody;
        Reply: IEmployeeProfileResponseSucessful | IEmployeeResponseError;
    }>('/', readAllemployeeprofileHandler);

    fastify.put<{
        Querystring: IEmployeeProfileRequestBody;
        Reply: IEmployeeProfileResponseSucessful | IEmployeeResponseError;
    }>('/', updateEmployeeProfileHandler);

    fastify.delete<{
        Querystring: IEmployeeProfileRequestBody;
        Reply: IEmployeeProfileResponseSucessful | IEmployeeResponseError;
    }>('/:id', deleteEmployeeProfileHandler);
    
};
export default employeeprofile;