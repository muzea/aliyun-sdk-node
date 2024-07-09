export interface CreateInstanceResponse {
    /**
     * 请求ID。
     * @example `312F48C7-AFA0-46AA-B8F6-1B16B8808045`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `An internal error occurred`
     */
    ErrorInfo: string;
    /**
     * 返回的创建实例的结果。
     * @example `true`
     */
    Result: string;
    /**
     * 错误码。
     * @example `600`
     */
    ErrorCode: string;
    /**
     * 请求是否调用成功。
     * @example `true`
     */
    Success: boolean;
}
