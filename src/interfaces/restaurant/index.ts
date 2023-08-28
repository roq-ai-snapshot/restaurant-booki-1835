import { EmployeeInterface } from 'interfaces/employee';
import { MenuInterface } from 'interfaces/menu';
import { ReservationInterface } from 'interfaces/reservation';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  menu?: MenuInterface[];
  reservation?: ReservationInterface[];
  table?: TableInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    menu?: number;
    reservation?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
