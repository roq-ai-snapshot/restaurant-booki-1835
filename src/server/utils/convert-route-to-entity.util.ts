const mapping: Record<string, string> = {
  employees: 'employee',
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
