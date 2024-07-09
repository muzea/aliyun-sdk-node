export interface DisableUserResponse {
    /**
     * 请求唯一ID
     * @example `34E01EDD-6A16-4CF0-9541-C644D1BE01AA`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 错误消息
     * @example `The specified user not exists.`
     */
    ErrorMessage: string;
    /**
     * - **true**：禁用成功
     * - **false**：禁用失败
     * @example `true`
     */
    Success: boolean;
}
