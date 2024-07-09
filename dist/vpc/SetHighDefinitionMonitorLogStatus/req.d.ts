export interface SetHighDefinitionMonitorLogStatusRequest {
    /**
     * 实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 日志服务LogProject的名称。
     * @example `hdmonitor-cn-shenzhen`
     */
    "LogProject": string;
    /**
     * 日志服务LogStore的名称。
     * @example `hdmonitor`
     */
    "LogStore": string;
    /**
     * 需要配置高精度秒级监控的实例ID。
     * @example `eip-wz9fi6qboho9fwgx7****`
     */
    "InstanceId": string;
    /**
     * 实例的类型，仅取值为**EIP**。
     * @example `EIP`
     */
    "InstanceType"?: string;
    /**
     * 实例的高精度秒级监控状态。取值：
     * - **ON**：开启高精度秒级监控。
     * - **OFF**：关闭高精度秒级监控。
     * @example `ON`
     */
    "Status": string;
}
