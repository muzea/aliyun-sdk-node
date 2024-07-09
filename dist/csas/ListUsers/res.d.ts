export interface ListUsersResponse {
    /**
     * 本次请求的ID。
     * @example `5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D`
     */
    RequestId: string;
    /**
     * 用户总数。
     * @example `1`
     */
    TotalNum: string;
    /**
     * 用户列表。
     */
    Users: {
        /**
         * 用户名。
         * @example `王先生`
         */
        Username: string;
        /**
         * 用户ID。
         * @example `su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****`
         */
        SaseUserId: string;
        /**
         * 用户所属部门。
         * @example `测试部`
         */
        Department: string;
        /**
         * 用户邮箱。
         * @example `a***@example.net`
         */
        Email: string;
        /**
         * 用户手机号码。
         * @example `1381111****`
         */
        Phone: string;
        /**
         * 用户状态。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 用户身份源名称。
         * @example `飞书`
         */
        IdpName: string;
    }[];
}
