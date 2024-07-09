export interface OperationSuspEventsResponse {
    /**
     * 异常事件处理的结果状态。取值：
     * - **true**：处理成功。
     * - **false**：处理失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 是否有权限访问。取值：
     * - **pass**：有权限。
     * - **no_permission**：没有权限。
     * @example `pass`
     */
    AccessCode: string;
}
