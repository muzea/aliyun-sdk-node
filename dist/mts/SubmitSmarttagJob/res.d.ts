export interface SubmitSmarttagJobResponse {
    /**
     * 请求ID。
     * @example `7B117AF5-2A16-412C-B127-FA6175ED1AD0`
     */
    RequestId: string;
    /**
     * 智能标签作业ID。建议您保存此ID便于后续调用其他接口时使用。
     * @example `39f8e0bc005e4f309379701645f4****`
     */
    JobId: string;
}
