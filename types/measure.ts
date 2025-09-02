export interface sensorType {
    id: number;
    typeName: string;
  }
  
  export interface sensorObject {
    id: number;
    name: string;
    description: string;
    companyId: number;
    min: number | null;
    max: number | null;
    sensorType: sensorType | null;
    measurementObjectId: number | null;
  }
  
  export interface measurementObject {
    id: number;
    name: string;
    description: string;
    location: string;
    companyId: number;

  }
  
 
  export interface sensorObjectValue {
    id: number;
    value: number;
    date: string;
    sensorObject: sensorObject;
  }