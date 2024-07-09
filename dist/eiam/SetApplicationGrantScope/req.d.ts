export interface SetApplicationGrantScopeRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx
    `
     */
    "ApplicationId": string;
    /**
     * API授权范围集合。
     */
    "GrantScopes"?: string[];
}
