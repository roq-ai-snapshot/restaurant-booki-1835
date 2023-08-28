import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  restaurant_id: string;
  position: string;
  start_date: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  restaurant_id?: string;
  position?: string;
}
