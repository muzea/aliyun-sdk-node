export interface AssignLeniPrivateIpAddressRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏弹性网卡辅助私网IP（缺省自动分配）。
     * @example `10.0.****`
     */
    "PrivateIpAddress"?: string;
    /**
     * 灵骏弹性网卡ID。
     * @example `leni-1234****`
     */
    "ElasticNetworkInterfaceId": string;
    /**
     * 描述信息。
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 幂等标识。
     * @example `3fd79d62-ab1d-11ec-9a53-0242ac110004`
     */
    "ClientToken"?: string;
}
