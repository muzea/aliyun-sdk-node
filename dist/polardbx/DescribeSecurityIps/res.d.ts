export interface DescribeSecurityIpsResponse {
    /**
     * 接口额外返回信息，成功返回success，错误返回对应错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `14036EBE-CF2E-44DB-ACE9-AC6157D3A6FC`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例名称。
         * @example `pxc-hzjasd****`
         */
        DBInstanceName: string;
        /**
         * 白名单分组列表。
         */
        GroupItems: {
            /**
             * 白名单分组名称。
             * @example `defaultGroup`
             */
            GroupName: string;
            /**
             * 分组白名单详情。
             * @example `127.0.0.1,172.168.0.0`
             */
            SecurityIPList: string;
        }[];
    };
}
