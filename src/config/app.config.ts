interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Site Owner'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Site Owner'],
  tenantName: 'Organization',
  applicationName: 'Mschap Ai',
  addOns: ['chat'],
};
