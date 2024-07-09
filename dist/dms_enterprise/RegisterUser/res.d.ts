export interface RegisterUserResponse {
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
     * @example `The specified user already exists.`
     */
    ErrorMessage: string;
    /**
     * - true：录入成功
     * - false：录入失败
     * @example `true`
     */
    Success: boolean;
}
