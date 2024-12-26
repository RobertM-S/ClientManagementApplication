export interface Client{ 
    eid:string,
    ename:string, 
    company:string,
    email:string, 
    phone:string, 
    address:{ 
        city?:string, 
        country:string, 
        zipcode?:string 
    } 
    id?: string;
} 