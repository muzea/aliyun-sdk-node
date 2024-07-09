export interface CreateRepoSyncTaskByRuleResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `17A4C658-AE8F-4A08-821F-EDCB5FC74EE8`
     */
    RequestId: string;
    /**
     * 同步任务ID
     * @example `rst-biu4u4pm4it5****`
     */
    SyncTaskId: string;
}
