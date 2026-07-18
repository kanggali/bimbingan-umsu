import type { RoleData } from './role';

export interface AccessUserData {
    id: number;
    name: string;
    email: string;
    roles: RoleData[];
    permission_ids: number[];
}

export interface MenuData {
    id: number;
    name: string;
    url: string;
    category: string;
    icon: string;
    main_menu_id: number | null;
    active: boolean | number;
    orders: number;
    sub_menus?: MenuData[];
}
