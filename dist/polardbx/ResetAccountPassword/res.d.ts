export interface ResetAccountPasswordResponse {
    /**
     * 返回信息，成功返回success，错误返回对应错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `73559800-3c8c-11ec-bd40-99cfcff3fe1e`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
