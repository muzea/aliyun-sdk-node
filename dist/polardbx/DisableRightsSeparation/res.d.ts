export interface DisableRightsSeparationResponse {
    /**
     * 成功返回success，错误返回对应错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `FE5D94E3-3C93-3594-95D9-AAED2A980915`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
