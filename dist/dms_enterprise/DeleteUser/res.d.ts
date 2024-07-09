export interface DeleteUserResponse {
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `34E01EDD-6A16-4CF0-9541-C644D1BE01AA	`
     */
    RequestId: string;
    /**
     * 错误码，请求异常时返回。
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `The specified user not exists.	`
     */
    ErrorMessage: string;
    /**
     * 返回值说明。
     * - **true**：删除成功。
     * - **false**：删除失败。
     * @example `true`
     */
    Success: boolean;
}
