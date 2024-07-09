export interface CreateRankingModelRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 是否校验参数。
     * 取值：
     * - **true**：校验模型ID是否存在。
     * - **false**：默认false，校验参数后创建模型 。
     * @example `true`
     */
    "dryRun"?: boolean;
}
