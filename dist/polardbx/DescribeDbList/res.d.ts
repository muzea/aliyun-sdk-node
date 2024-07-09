export interface DescribeDbListResponse {
    /**
     * 返回信息，成功返回success，错误返回对应错误码。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据库列表。
     */
    Data: {
        /**
         * 数据库名称。
         * @example `test`
         */
        DBName: string;
        /**
         * 数据库描述。
         * @example `test`
         */
        DBDescription: string;
        /**
         * 实例名称。
         * @example `pxc-********`
         */
        DBInstanceName: string;
        /**
         * 字符集。
         * @example `utf8mb4`
         */
        CharacterSetName: string;
        /**
         * 账户列表。
         */
        Accounts: {
            /**
             * 权限。
             * @example `ReadWrite`
             */
            AccountPrivilege: string;
            /**
             * 账户名称。
             * @example `root4test`
             */
            AccountName: string;
        }[];
    }[];
}
