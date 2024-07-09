export interface UpdateIstioRouteAdditionalStatusRequest {
    /**
     * 服务网格实例ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * ASM网关名称
     * @example `ingressgateway`
     */
    "IstioGatewayName"?: string;
    /**
     * 路由名称
     * @example `http-test`
     */
    "RouteName"?: string;
    /**
     * 路由优先级。整数类型，数字越小，优先级越高
     * @example `0`
     */
    "Priority"?: number;
    /**
     * 路由状态。0表示在线，1表示下线，2表示创建或更新错误
     * @example `0`
     */
    "Status"?: number;
    /**
     * 路由描述
     * @example `demo route`
     */
    "Description"?: string;
}
