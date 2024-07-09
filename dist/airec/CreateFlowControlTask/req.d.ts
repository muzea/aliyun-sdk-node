export interface CreateFlowControlTaskRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
    /**
     * 是否为空运行请求。
     * 取值：
     * - **true**：只检查参数正确。
     * - **false**：检查参数后执行操作。
     * @example `true`
     */
    "dryRun"?: boolean;
}
