export interface DeleteInstanceRequest {
    /**
     * 实例ID。
     * @example `es-cn-t57p81n7ai89v****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 释放类型。可选值：
     * - immediate：立即删除。删除后，系统会彻底清除所有数据，且实例不再显示在实例列表中。
     * - protective：实例会被冻结24小时后，再彻底清除数据，期间实例仍在实例列表中显示，您可以选择[恢复实例](~~202195~~)或[立即释放](~~202195~~)。
     * @example `protective`
     */
    "deleteType"?: string;
}
