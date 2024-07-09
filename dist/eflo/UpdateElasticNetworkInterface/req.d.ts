export interface UpdateElasticNetworkInterfaceRequest {
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
     * 描述信息
     * @example `描述`
     */
    "Description"?: string;
    "SecurityGroupId"?: string;
    /**
     * 幂等参数
     * @example `3fd79d62-ab1d-11ec-9a53-0242ac110004`
     */
    "ClientToken"?: string;
}
