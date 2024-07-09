export interface UpdateWhiteIpsRequest {
    /**
     * 实例ID。
     * @example `es-cn-npk2154oi000b****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 修改方式，可选值：
     * - Cover（默认）：使用ips参数的值覆盖原白名单的IP地址。
     * - Append：在原白名单的IP地址中增加ips参数中输入的IP地址。
     * - Delete：在原白名单的IP地址中删除ips参数中输入的IP地址，至少需要保留一个IP地址。
     * @example `Cover`
     */
    "modifyMode"?: string;
    /**
     * RequestBody信息。
     */
    "body"?: {
        /**
         * 白名单中的IP地址信息。
         */
        esIPWhitelist: string[];
        /**
         * 以白名单组方式更新实例白名单配置，仅支持更新一个白名单组。
         * ><notice> 不支持同时配置esIPWhitelist和whiteIpGroup。
         * ></notice>
         */
        whiteIpGroup: {
            /**
             * 白名单组的组名。如果选填了whiteIpGroup参数，则该参数必填。
             * @example `test_group`
             */
            groupName: string;
            /**
             * 白名单组中的IP地址列表。
             */
            ips: string[];
            /**
             * IP白名单的类型。固定为**PRIVATE_ES**，即私网访问白名单。
             * @example `PRIVATE_ES`
             */
            whiteIpType: string;
        };
    };
}
