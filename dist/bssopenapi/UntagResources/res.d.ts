export interface UntagResourcesResponse {
    /**
     * 状态码
     * @example `PARAM_ERROR`
     */
    Code: string;
    /**
     * 错误信息
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
     * @example `C7C15585-8349-4C62-BEE4-5A391841B9BE`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
