export interface UpdateErResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `3D9D6E7B-365B-5200-BFA6-9B79E269058C`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Content: any;
}
