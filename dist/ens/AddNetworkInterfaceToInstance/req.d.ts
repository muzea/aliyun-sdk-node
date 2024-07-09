export interface AddNetworkInterfaceToInstanceRequest {
    /**
     * 实例ID。
     * @example `yourInstance ID`
     */
    "InstanceId": string;
    /**
     * 网络参数，格式为JSON字符串，目前仅支持IPv6。增加IPv6网关如下所示：
     * \[{
     * "ipType": "public",
     * "ipAddressType": "ipv6"
     * }]
     * @example `[{"ipType": "public", "ipAddressType": "ipv6" }]`
     */
    "Networks": string;
    /**
     * 是否自动重启。
     * @example `true`
     */
    "AutoStart"?: boolean;
}
