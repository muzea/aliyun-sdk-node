export interface SubmitASRJobResponse {
    /**
     * 请求Id
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 智能任务Id
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    JobId: string;
    /**
     * 任务状态
     * - Created
     * - Executing
     * - Finished
     * - Failed
     * @example `Finished`
     */
    State: string;
}
