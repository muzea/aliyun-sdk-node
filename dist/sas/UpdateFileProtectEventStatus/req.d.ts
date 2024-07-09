export interface UpdateFileProtectEventStatusRequest {
    /**
     * 事件的ID列表。
     */
    "Id"?: number[];
    /**
     * 事件处理状态。
     * - **0**：未处理
     * - **1**：我已手工处理
     * - **2**：已加白
     * - **3**：已忽略
     * @example `0`
     */
    "Status"?: number;
}
