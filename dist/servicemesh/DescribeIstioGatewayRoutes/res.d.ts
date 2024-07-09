export interface DescribeIstioGatewayRoutesResponse {
    /**
     * 路由列表。
     */
    ManagementRoutes: {
        /**
         * ASM网关名称。
         * @example `ingressgateway`
         */
        ASMGatewayName: string;
        /**
         * 路由名称。
         * @example `http-route`
         */
        RouteName: string;
        /**
         * 路由请求路由。
         * @example `/reviews/v1`
         */
        RoutePath: string;
        /**
         * 网关路由状态，取值：
         * - `0`：在线。
         * - `1`：下线。
         * - `2`：创建或更新错误。
         * @example `1`
         */
        Status: number;
        /**
         * 路由优先级。整数，数字越小，优先级越高。
         * @example `1`
         */
        Priority: number;
        /**
         * 路由描述
         * @example `demo route`
         */
        Description: string;
        /**
         * 命名空间。
         * @example `istio-demo`
         */
        Namespace: string;
        /**
         * 匹配的请求域名列表
         */
        DestinationHost: string[];
        /**
         * 目标服务子集的列表。
         */
        DestinationSubSet: string[];
    }[];
    /**
     * 请求ID
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
}
