import { Company,People } from "./employee";

export interface UserCredentials  {
  email: string;
  password: string;
  
}
export interface Permission {
  name:string,
  description:string
}
export interface Role {
  id: number;
  name: string;
  companyId: number;
}
// export interface UserRole {
//     id: number;
//     roleId: number;
//     userId: number
//     role: Role;
//   }
export interface User {
    id: number;    
    email: string;    
    roles: Role[];
    company: Company;
    people: People;    
}
export interface Auth {
  accessToken: string;
  refreshToken?: string;
}
// export interface JWTPayload {
//   id: number;
//   username: string;
//   email: string;
//   roles: string[];
//   companyId: number;
//   peopleId: number;
//   // companyName: company.name;
//   // first_name: people.firstName;
//   // last_name: people.lastName;
//   // fullname: people.firstName;
//   permissions: string[];
// }

export interface JWTPayload{
  id:number;
  email:string;
  companyId:number;
  peopleId:number;
}

export interface SuccessPayload <T> {
    success: boolean;
    user:T;
}