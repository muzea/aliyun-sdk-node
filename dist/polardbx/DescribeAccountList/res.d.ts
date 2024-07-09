export interface DescribeAccountListResponse {
    /**
     * 返回信息，成功返回success，错误返回对应错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9B2F3840-5C98-475C-B269-2D5C3A31797C`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 账号创建时间.
         * @example `2012-06-08T15:00Z`
         */
        GmtCreated: string;
        /**
         * 实例名称。
         * @example `pxc-*********`
         */
        DBInstanceName: string;
        /**
         * 账号描述。
         * @example `testaccount desc`
         */
        AccountDescription: string;
        /**
         * 账号被授予权限的数据库。
         * @example `testdb`
         */
        DBName: string;
        /**
         * 账号被授予的权限。
         * @example `ReadWrite`
         */
        AccountPrivilege: string;
        /**
         * 账号类型。
         * - 开启三权分立前：0代表普通账号，1代表高权限账号；
         * - 开启三权分立后，0代表普通账号，2代表系统管理员账号，3代表安全管理员账号，4代表审计管理员账号。
         * @example `0`
         */
        AccountType: string;
        /**
         * 账号名称。
         * @example `testAccount`
         */
        AccountName: string;
    }[];
}
