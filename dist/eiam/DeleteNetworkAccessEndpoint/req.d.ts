export interface DeleteNetworkAccessEndpointRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 专属网络端点ID。仅可删除NetworkEndpointType为专属类型（private）的网络端点。
     * @example `nae_examplexxxx`
     */
    "NetworkAccessEndpointId": string;
}
