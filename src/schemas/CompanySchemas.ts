export interface ICompanyRequestBody {
    id: number;
    name: string;
  }
  export interface ICompanyResponseSucessful {
    message: string;
  }
  export interface ICOmpanyResponseError {
    status: number;
    message: string;
  }