export interface UpdateWhiteIpsResponse {
    /**
     * 请求ID。
     * @example `8D58B014-BBD7-4D80-B219-00B9D5C6860C`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 私网访问白名单（已废弃）。
         */
        esIPWhitelist: string[];
        /**
         * 网络配置。
         */
        networkConfig: {
            /**
             * 白名单组列表。
             */
            whiteIpGroupList: {
                /**
                 * 白名单组的组名。默认包含default分组。
                 * @example `test_group`
                 */
                groupName: string;
                /**
                 * 白名单组中的IP地址信息。
                 */
                ips: string[];
                /**
                 * 白名单类型。固定为PRIVATE_ES，即私网访问白名单。
                 * @example `PRIVATE_ES`
                 */
                whiteIpType: string;
            }[];
        };
    };
}
