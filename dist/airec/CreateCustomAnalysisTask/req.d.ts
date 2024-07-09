export interface CreateCustomAnalysisTaskRequest {
    /**
     * 查询类型 。
     * 如：
     * **ITEM_CUSTOM**：物品维度自定义分析。
     * @example `ITEM_CUSTOM`
     */
    "type": string;
    /**
     * 实例ID。
     * @example `airec-cn-xxx`
     */
    "instanceId": string;
}
