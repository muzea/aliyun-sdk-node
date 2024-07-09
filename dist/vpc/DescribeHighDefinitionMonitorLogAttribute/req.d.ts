export interface DescribeHighDefinitionMonitorLogAttributeRequest {
    /**
     * 实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~448570~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询高精度秒级监控的实例ID。
     * @example `eip-wz9fi6qboho9fwgx7****`
     */
    "InstanceId": string;
    /**
     * 实例的类型，仅取值为**EIP**。
     * @example `EIP`
     */
    "InstanceType"?: string;
}
