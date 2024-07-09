export interface UpdateNetworkAccessEndpointNameRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 专属网络端点ID。
     * @example `nae_examplexxxx`
     */
    "NetworkAccessEndpointId": string;
    /**
     * 专属网络端点名称。仅可更新NetworkEndpointType为专属类型（private）的网络端点。
     * @example `xx业务VPC访问端点`
     */
    "NetworkAccessEndpointName": string;
}
