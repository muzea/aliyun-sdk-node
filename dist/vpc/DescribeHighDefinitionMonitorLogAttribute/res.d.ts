export interface DescribeHighDefinitionMonitorLogAttributeResponse {
    /**
     * 日志服务LogProject的名称。
     * @example `hdmonitor-cn-shenzhen-1658206966225390`
     */
    LogProject: string;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B457`
     */
    RequestId: string;
    /**
     * 日志服务LogStore的名称。
     * @example `hdmonitor`
     */
    LogStore: string;
    /**
     * 结果是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: string;
    /**
     * 要查看高精度秒级监控的实例ID。
     * @example `eip-wz9fi6qboho9fwgx7****`
     */
    InstanceId: string;
    /**
     * 要查看高精度秒级监控的实例类型，仅可以取值为**EIP**。
     * @example `EIP`
     */
    InstanceType: string;
}
