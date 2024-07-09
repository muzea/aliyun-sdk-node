export interface SubmitAudioProduceJobResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 任务ID
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    JobId: string;
    /**
     * 任务状态：
     * - Created
     * - Executing
     * - Finished
     * - Failed
     * @example `Created`
     */
    State: string;
    /**
     * 媒资Id
     * @example `****2bcbfcfa30fccb36f72dca22****`
     */
    MediaId: string;
}
