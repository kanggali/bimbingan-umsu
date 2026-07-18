import type { AccessRoleData } from '@/types/access-role';
import { createFormStore } from './createFormStore';

export const useAccessRoleStore = createFormStore<AccessRoleData>();
