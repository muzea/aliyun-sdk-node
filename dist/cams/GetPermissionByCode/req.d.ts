export interface GetPermissionByCodeRequest {
    /**
     * 授权Code信息。
     * @example `flow_001`
     */
    "Code": string;
    /**
     * ISV子客户的SpaceId。
     * @example `39384****`
     */
    "CustSpaceId"?: string;
    /**
     * 权限列表。
     */
    "Permissions"?: string[];
}
