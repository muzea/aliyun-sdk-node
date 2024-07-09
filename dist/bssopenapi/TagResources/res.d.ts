export interface TagResourcesResponse {
    /**
     * 状态码。
     * @example `InternalError`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `This API is not applicable for caller.`
     */
    Message: string;
    /**
     * 返回数据
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID
     * @example `1537A007-72D7-4165-8A26-8694A38E219A`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
