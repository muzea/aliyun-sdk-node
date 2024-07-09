export interface ModifyTenantUserStatusResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户中的数据库账号列表信息。
     */
    TenantUser: {
        /**
         * 数据库账号的状态。
         * - LOCKED：锁定。
         * - ONLINE：解锁。
         * @example `LOCKED`
         */
        UserStatus: string;
        /**
         * 账号名称。
         * @example `pay_test`
         */
        UserName: string;
        /**
         * 租户 ID。
         * @example `t33h8y08k****`
         */
        TenantId: string;
    }[];
}
