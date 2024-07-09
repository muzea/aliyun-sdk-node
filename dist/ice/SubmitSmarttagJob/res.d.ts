export interface SubmitSmarttagJobResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 智能标签作业ID。建议您保存此ID便于后续调用其他接口时使用。
     * @example `****d80e4e4044975745c14b****`
     */
    JobId: string;
}
