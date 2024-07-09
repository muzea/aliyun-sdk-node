export interface UpdateCustomAuthPermissionResponse {
    /**
     * Id of the request
     * @example `8CC04203-679B-4DED-89D9-E7C2E979****`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 信息。
     * @example `operation success.`
     */
    Message: string;
}
