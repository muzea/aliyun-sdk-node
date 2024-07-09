export interface DeleteElasticNetworkInterfaceRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏弹性网卡ID
     * @example `leni-1234****`
     */
    "ElasticNetworkInterfaceId": string;
    /**
     * popApi 默认不忽略，幂等使用
     * @example `141cccd6-dfbd-11ec-b8e8-0242ac110003`
     */
    "ClientToken"?: string;
}
