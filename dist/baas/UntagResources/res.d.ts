export interface UntagResourcesResponse {
    /**
     * 请求ID。
     * @example `21B8738D-254C-4933-9FC1-3C31B2611482`
     */
    RequestId: string;
    /**
     * 结果值。
     * @example `true`
     */
    Result: boolean;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `200`
     */
    ErrorCode: number;
}
