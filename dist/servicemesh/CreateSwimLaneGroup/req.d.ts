export interface CreateSwimLaneGroupRequest {
    /**
     * 服务网格ID。
     * @example `xxx`
     */
    "ServiceMeshId": string;
    /**
     * 泳道组下关联的服务列表，取值为JSON数组。单个服务的格式为：` $集群名称/$集群id/$namespace/$serviceName`。
     * @example `[\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka\",\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb\",\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc\"]`
     */
    "ServicesList": string;
    /**
     * 泳道组名称。
     * @example `test`
     */
    "GroupName": string;
    /**
     * 入口流量类型，目前仅支持ASM网关。
     * @example `ASM`
     */
    "IngressType": string;
    /**
     * ASM网关名称。
     * @example `ingressgateway`
     */
    "IngressGatewayName": string;
    /**
     * 创建的流量泳道是否是宽松模式。
     * @example `false`
     */
    "IsPermissive"?: boolean;
    /**
     * 宽松模式泳道组的链路透传请求头。当IsPermissive参数为true时，此参数为必填。
     * @example `my-request-id`
     */
    "TraceHeader"?: string;
    /**
     * 宽松模式流量泳道组的引流请求头。当IsPermissive参数为true时，此参数为必填。
     * @example `x-asm-prefer-tag`
     */
    "RouteHeader"?: string;
}
