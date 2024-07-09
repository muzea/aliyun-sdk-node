export interface UpdateKibanaWhiteIpsResponse {
    /**
     * 请求ID。
     * @example `E5EF11F1-DBAE-4020-AC24-DFA6C4345CAE`
     */
    RequestId: string;
    /**
     * 返回对应Elasticsearch实例的详情。
     */
    Result: {
        /**
         * Kibana私网访问白名单列表。
         */
        kibanaPrivateIPWhitelist: string[];
        /**
         * Kibana访问白名单列表。
         */
        kibanaIPWhitelist: string[];
        /**
         * 网络配置信息。
         */
        networkConfig: {
            /**
             * 专有网络ID。
             * @example `vpc-bp1jy348ibzulk6hn****`
             */
            vpcId: string;
            /**
             * 交换机ID。
             * @example `vsw-bp1a0mifpletdd1da****`
             */
            vswitchId: string;
            /**
             * 实例所在地域。
             * @example `cn-hangzhou-h`
             */
            vsArea: string;
            /**
             * 网络类型。
             * @example `vpc`
             */
            type: string;
            /**
             * 白名单组列表。
             */
            whiteIpGroupList: {
                /**
                 * 白名单组组名。
                 * @example `test_group_name`
                 */
                groupName: string;
                /**
                 * 白名单组中的IP列表。
                 */
                ips: string[];
                /**
                 * 白名单类型。
                 * @example `PUBLIC_KIBANA`
                 */
                whiteIpType: string;
            }[];
        };
    };
}
