export interface DescribeClusterSecurityInfoResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 白名单分组列表。
         */
        SecurityIpGroups: {
            /**
             * 白名单分组名称。
             * @example `test`
             */
            GroupName: string;
            /**
             * 白名单分组下的IP列表。
             * @example `192.168.xx.xx,192.168.xx.xx`
             */
            SecurityIps: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `2371CC7A-E9C3-5817-97C9-F6333D74BA6C`
     */
    RequestId: string;
}
