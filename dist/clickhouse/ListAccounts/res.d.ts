export interface ListAccountsResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 数据库账号。
         * @example `test`
         */
        Account: string;
        /**
         * 数据库账号的加密密码。
         * @example `cd0289a263bf4146a2e00888321178234b65e8c050142074ad05683e3749****`
         */
        PasswordSha256Hex: string;
        /**
         * 数据库账号的权限类型。取值说明：
         * - **Normal**：普通账户。
         * - **Readonly**：只读账户。
         * - **Dml**：DML账户（无DDL权限）。
         * - **Super**：超级账户。
         * @example `Normal`
         */
        PrivilegeType: string;
        /**
         * 数据库账号的权限类型说明。
         * @example `普通账户`
         */
        PrivilegeDescription: string;
        /**
         * 数据库账号的描述。
         * @example `test`
         */
        Comment: string;
    }[];
    /**
     * 请求ID。
     * @example `E889A8CD-A4B4-5676-8EDB-80E06E072353`
     */
    RequestId: string;
}
