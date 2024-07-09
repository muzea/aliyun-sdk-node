export interface UpdateMediaWorkflowTriggerModeRequest {
    /**
     * 需要更新的媒体工作流ID，可以通过**MPS控制台** > **工作流管理** > **工作流设置**获取。
     * @example `e00732b977da427d9177a4dee646****`
     */
    "MediaWorkflowId": string;
    /**
     * 触发模式。取值范围：
     * - **OssAutoTrigger**：自动触发。
     * - **NotInAuto**：不自动触发。
     * @example `NotInAuto`
     */
    "TriggerMode": string;
}
