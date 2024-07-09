export interface CreateFilteringAlgorithmRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 是否预检参数。
     * 取值：
     * - **true**：不会真实执行。
     * - **false**：会直接执行。
     * @example `true`
     */
    "dryRun"?: string;
}
