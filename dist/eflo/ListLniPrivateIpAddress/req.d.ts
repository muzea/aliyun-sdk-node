export interface ListLniPrivateIpAddressRequest {
    /**
     * 地域 ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网卡ID
     * @example `lni-2ze4uww7n6hsfzrwq77y`
     */
    "NetworkInterfaceId"?: string;
    /**
     * 网卡IP地址
     * @example `10.0.98.10`
     */
    "Ip"?: string;
    /**
     * IP唯一标识
     * @example `sip-tynhdh2s`
     */
    "IpName"?: string;
    /**
     * 描述信息
     * @example `test测试`
     */
    "Description"?: string;
    /**
     * 当前页
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前页数量
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否需要分页
     * @example `false`
     */
    "EnablePage"?: boolean;
}
