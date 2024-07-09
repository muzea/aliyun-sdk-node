export interface ListTaskDetailRequest {
    /**
     * 呼叫状态码。
     * @example `000001`
     */
    "StatusCode"?: string;
    /**
     * 明细状态。取值：
     * - **SUCCESS**：外呼成功。
     * - **FAIL**：外呼失败。
     * - **INIT**：未外呼。
     * @example `SUCCESS`
     */
    "Status"?: string;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 被叫号码。
     * @example `186****0000`
     */
    "Called"?: string;
    /**
     * 任务ID。
     * 您可以在控制台的[任务管理](https://aiccs.console.aliyun.com/job/list)页面，获取任务ID。
     * @example `12****`
     */
    "TaskId": number;
    /**
     * 明细ID。
     * @example `12****`
     */
    "Id"?: number;
}
