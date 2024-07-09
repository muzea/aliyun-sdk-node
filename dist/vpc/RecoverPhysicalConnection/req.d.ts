export interface RecoverPhysicalConnectionRequest {
    /**
     * 物理专线实例ID。
     * > 目前仅支持恢复共享专线的接入。
     * @example `pc-bp1mrgfbtmc9brre7****`
     */
    "InstanceId": string;
    /**
     * 客户端Token用于保证请求的幂等性。
     * 由客户端生成该参数值，需保证该参数在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `CBCE910E-D396-4944-8****`
     */
    "Token"?: string;
    /**
     * 是否只预检此次请求。取值范围：
     * - **true**：发送检查请求，不会恢复物理专线接入。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回请求ID。
     * - **false**（默认值）：发送正常请求，通过检查后直接恢复物理专线接入。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 物理专线所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
