export interface UpdateSmartAccessGatewayGlobalRouteProtocolRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-3manef62evrfr6****`
     */
    "SagInsId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sagf4dk****`
     */
    "SagSn": string;
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 路由协议。取值：
     * - **STATIC**：静态路由协议。
     * - **OSPF**：OSPF动态路由协议。
     * - **BGP**：BGP动态路由协议。
     * @example `BGP`
     */
    "RouteProtocol": string;
    /**
     * 是否只查询跨账号所属的智能接入网关实例。取值：
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "CrossAccount"?: boolean;
    /**
     * 智能接入网关实例所属的阿里云账号（主账号）ID。
     * @example `109790620697****`
     */
    "ResourceUid"?: string;
}
