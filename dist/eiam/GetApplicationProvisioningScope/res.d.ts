export interface GetApplicationProvisioningScopeResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 账户同步范围。
     */
    ApplicationProvisioningScope: {
        /**
         * 账户同步授权的组织机构范围列表。
         */
        OrganizationalUnitIds: string[];
        /**
         * 同步授权的组列表
         */
        GroupIds: string[];
        /**
         * 已使用授权主体quota数量
         */
        UsedQuota: number;
        /**
         * 租户最大授权主体quota数量
         */
        MaxQuota: number;
    };
}
