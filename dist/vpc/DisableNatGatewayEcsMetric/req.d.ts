export interface DisableNatGatewayEcsMetricRequest {
    /**
     * NAT网关所属的地域，您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * 是否只预检此次请求，取值：
     * **true**：发送检查请求，不会关闭ECS流量监控。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * **false**（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并关闭ECS流量监控。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要关闭ECS流量监控功能的NAT网关ID。
     * @example `ngw-2vc53wynunp35lw1y****`
     */
    "NatGatewayId": string;
}
