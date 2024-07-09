export interface PushDocumentResponse {
    /**
     * true/false
     * @example `true`
     */
    result: boolean;
    /**
     * 错误码
     * @example `0`
     */
    code: string;
    /**
     * 请求的RequestID
     * @example `829F38F6-E2D6-4109-90A6-888160BD16C2`
     */
    requestId: string;
    /**
     * 返回信息
     * @example `success`
     */
    message: string;
}
