export interface ListLeniPrivateIpAddressesRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏弹性网卡ID。
     * @example `leni-1234****`
     */
    "ElasticNetworkInterfaceId"?: string;
    /**
     * 灵骏弹性网卡辅助私网IP唯一标识。
     * @example `sip-8ylg****`
     */
    "IpName"?: string;
    /**
     * 灵骏弹性网卡辅助私网IP。
     * @example `10.0.****`
     */
    "PrivateIpAddress"?: string;
    /**
     * 状态。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。
     * @example `20`
     */
    "PageSize"?: number;
}
