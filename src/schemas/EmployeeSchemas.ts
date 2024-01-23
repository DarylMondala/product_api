export interface IEmployeeRequestBody {
    id: number;
    employee_id: number;
    company_id: number;
    
  }
  export interface IEmployeeResponseSucessful {
    message: string;
  }
  export interface IEmployeeResponseError {
    status: number;
    message: string;
  }