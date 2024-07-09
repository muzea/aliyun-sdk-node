export interface UpdateErAttachmentResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `7F9082CC-3D94-560F-A575-8E8EF6CE2CB8`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: any;
}
