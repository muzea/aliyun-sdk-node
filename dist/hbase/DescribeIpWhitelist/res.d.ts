export interface DescribeIpWhitelistResponse {
    /**
     * 请求ID。
     * @example `AFAA617B-3268-5883-982B-DB8EC8CC1F1B`
     */
    RequestId: string;
    Groups: {
        /**
         * IP白名单分组列表。
         */
        Group: {
            /**
             * IP地址的类型，返回值：
             * - **4**：表示IPV4。
             * - **6**：表示IPV6。
             * @example `4`
             */
            IpVersion: number;
            /**
             * 白名单分组名称。
             * @example `default`
             */
            GroupName: string;
            IpList: {
                /**
                 * 分组中包含的IP白名单列表。
                 */
                Ip: string[];
            };
        }[];
    };
}
