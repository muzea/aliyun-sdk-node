export interface ModifyWhiteIpsRequest {
    /**
     * 实例ID。
     * @example `es-cn-0pp1jxvcl000z****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ascii字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 节点类型，如果选填了whiteIpList参数，则该参数必填。可选值：
         * - WORKER：Elasticsearch集群
         * - KIBANA：Kibana集群
         * @example `WORKER`
         */
        nodeType: string;
        /**
         * 网络类型，如果选填了whiteIpList参数，则该参数必填。可选值：
         * - PRIVATE：私网
         * - PUBLIC：公网
         * @example `PUBLIC`
         */
        networkType: string;
        /**
         * 修改方式，可选值：
         * - Cover（默认）：使用ips参数的值覆盖原IP白名单。
         * - Append：在原IP白名单中增加ips参数中输入的IP地址。
         * - Delete：在原IP白名单中删除ips参数中输入的IP地址，至少需要保留一个IP地址。
         * @example `Cover`
         */
        modifyMode: string;
        /**
         * IP地址白名单列表。whiteIpGroup为空时可用，更改默认分组白名单。
         */
        whiteIpList: string[];
        /**
         * 以白名单组方式更新实例白名单配置，仅支持更新一个白名单组。
         * ><notice>不支持同时配置whiteIpList和whiteIpGroup。
         * ></notice>
         */
        whiteIpGroup: {
            /**
             * 白名单组的组名。如果选填了whiteIpGroup参数，则该参数必填。
             * @example `test_group`
             */
            groupName: string;
            /**
             * 白名单组中的IP地址列表。如果选填了whiteIpGroup参数，则该参数必填。
             */
            ips: string[];
            /**
             * IP白名单的类型，可选值：
             * - PRIVATE_KIBANA：Kibana私网访问白名单
             * - PRIVATE_ES：Elasticsearch私网访问白名单
             * - PUBLIC_ES：Elasticsearch公网访问白名单
             * - PUBLIC_KIBANA：Kibana公网访问白名单
             * @example `PRIVATE_ES`
             */
            whiteIpType: string;
        };
    };
}
