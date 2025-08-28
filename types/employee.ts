export interface Company {
    id: number;
    name: string;
  }
  export interface People {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
  }
  export interface Position{
    id: number;
    name: string;
  }
  export interface Department{
    id: number;
    name: string;
    positions: Position[];
  }
  export interface Employee {
    id: number;
    companyId: number;
    peopleId: number;
    departmentId: number;
    positionId: number;
    company: Company;
    people: People;
    department: Department;
    position: Position;
  }