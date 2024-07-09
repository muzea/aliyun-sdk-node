export interface CloseOrderResponse {
    /**
     * 请求ID。
     * @example `427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: boolean;
}
