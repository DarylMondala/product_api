export interface IEmployeeProfileRequestBody {
    id: number;
    employee_name: string;
    position: string;
    salary: number;
    employee_id: number;
    
  }
  export interface IEmployeeProfileResponseSucessful {
    message: string;
  }
  export interface IEmployeeProfileResponseError {
    status: number;
    message: string;
  }