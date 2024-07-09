export interface AuthorizeApplicationToOrganizationalUnitsRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk2676xxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 组织ID列表，单次操作最多支持100个组织ID。
     * @example `ou_wovwffm62xifdziem7an7xxxxx`
     */
    "OrganizationalUnitIds": string[];
}
