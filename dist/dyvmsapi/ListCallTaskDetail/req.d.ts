export interface ListCallTaskDetailRequest {
    /**
     * 任务ID。
     * - 通过[CreateCallTask接口](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-createcalltask?spm=a2c4g.11186623.0.0.4b0a7be3m1G1Kx)获取任务ID。
     * - 在[语音服务控制台](https://dyvms.console.aliyun.com/call/task/list)任务中心页面获取任务ID。
     * @example `18908**`
     */
    "TaskId": number;
    /**
     * 被叫号码。
     * @example `1390000****`
     */
    "CalledNum"?: string;
    /**
     * 任务状态。取值：
     * - **SUCCESS**：外呼成功。
     * - **FAIL**：外呼失败。
     * - **INIT**：未开始外呼。
     * @example `SUCCESS`
     */
    "Status"?: string;
    /**
     * 当前页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的任务个数。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
