export interface SetApplicationProvisioningScopeRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 账户同步授权的组织机构范围列表。
     */
    "OrganizationalUnitIds"?: string[];
    /**
     * 同步授权的组范围列表
     */
    "GroupIds"?: string[];
}
