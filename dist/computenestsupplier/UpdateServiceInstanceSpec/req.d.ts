export interface UpdateServiceInstanceSpecRequest {
    /**
     * 服务实例ID。
     * @example `si-0e6fca6a51a54420****`
     */
    "ServiceInstanceId"?: string;
    /**
     * 套餐名称。
     * @example `套餐一`
     */
    "PredefinedParametersName"?: string;
    /**
     * 服务实例配置参数。
     * @example `{\"EcsInstanceParameter\":\"4vCPU 8GiB\",\"ZoneId\":\"cn-heyuan-a\",\"SystemDiskSize\":50,\"DataDiskSize\":150,\"InternetMaxBandwidthOut\":2,\"RegionId\":\"cn-heyuan\"}`
     */
    "Parameters"?: any;
    /**
     * 变配操作名称。
     * @example `套餐变配`
     */
    "OperationName"?: string;
    /**
     * 用户侧是否启用Prometheus。可选值：
     * - true：启用。
     * - false：不启用。
     * @example `true`
     */
    "EnableUserPrometheus"?: boolean;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `10CM943JP0EN9D51H`
     */
    "ClientToken"?: string;
}
