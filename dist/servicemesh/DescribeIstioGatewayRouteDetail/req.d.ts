export interface DescribeIstioGatewayRouteDetailRequest {
    /**
     * 服务网格实例ID。
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * ASM网关名称。
     * @example `ingressgateway`
     */
    "IstioGatewayName"?: string;
    /**
     * 路由名称。
     * @example `demo-route`
     */
    "RouteName"?: string;
}
