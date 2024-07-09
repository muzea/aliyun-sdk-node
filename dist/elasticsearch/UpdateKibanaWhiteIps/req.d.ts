export interface UpdateKibanaWhiteIpsRequest {
    /**
     * 实例ID。
     * @example `es-cn-tl329rbpc0001****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 修改方式，取值含义如下：
     * - Cover（默认值）：使用ips参数的值覆盖原IP白名单。
     * - Append：在原IP白名单中增加ips参数中输入的IP地址。
     * - Delete：在原IP白名单中删除ips参数中输入的IP地址，至少需要保留一个IP地址。
     * @example `Cover`
     */
    "modifyMode"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * Kibana节点IP访问白名单。不可与分组同时设置。
         */
        kibanaIPWhitelist: string[];
        /**
         * 以白名单组方式更新Kibana访问白名单配置，仅支持更新一个白名单组。
         * 不支持同时配置kibanaIPWhitelist和whiteIpGroup。
         */
        whiteIpGroup: {
            /**
             * 白名单组的组名。如果选填了whiteIpGroup参数，则该参数必填。
             * @example `test_group_name`
             */
            groupName: string;
            /**
             * 白名单类型，仅支持PUBLIC_KIBANA（公网访问白名单）。
             * @example `PUBLIC_KIBANA`
             */
            whiteIpType: string;
            /**
             * 白名单组中的IP列表。
             */
            ips: string[];
        };
    };
}
