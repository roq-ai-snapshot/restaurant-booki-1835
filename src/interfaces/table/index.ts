import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  number: number;
  capacity: number;
  restaurant_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  status?: string;
}
