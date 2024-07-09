export interface ListTrainTasksRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页数据显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 训练任务状态。
     * - **INIT**：未训练
     * - **PREPARING**：准备中
     * - **TRAINING**：训练中
     * - **TRAIN_SUCCESS**：训练成功
     * - **TRAIN_FAIL**：训练失败
     * @example `PREPARING`
     */
    "Status"?: string;
    /**
     * 生产空间ID。
     * @example `63`
     */
    "WorkspaceId": number;
}
