export interface DissociateRouteTableFromGatewayRequest {
    /**
     * 要解绑的网关路由表和IPv4网关实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 要解绑的网关路由表ID。
     * @example `vtb-5ts0ohchwkp3dydt2****`
     */
    "RouteTableId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会解绑网关路由表和IPv4网关实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接解绑网关路由表和IPv4网关实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要解绑的IPv4网关的实例ID。
     * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
     */
    "GatewayId": string;
    /**
     * 要解绑的网关实例的类型。
     * @example `Ipv4Gateway`
     */
    "GatewayType"?: string;
}
