export interface DeleteAvatarResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7`
     */
    RequestId: string;
    /**
     * 返回错误码
     * @example `10050008`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这是一个错误信息`
     */
    Message: string;
    /**
     * 是否成功
     * @example `false`
     */
    Success: boolean;
}
