export interface ListFilteringAlgorithmsRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 表示单签召回表的状态。
     * 取值：
     * - **Draft**：草稿。
     * - **Running**：运行中。
     * - **Offline**：已下线。
     * - **Deleted**：已删除。
     * @example `Running`
     */
    "status"?: string;
    /**
     * 召回表ID。
     * @example `123`
     */
    "algorithmId"?: string;
    /**
     * 召回表分页。
     * @example `1`
     */
    "page"?: number;
    /**
     * 召回表大小。
     * @example `1`
     */
    "size"?: number;
}
