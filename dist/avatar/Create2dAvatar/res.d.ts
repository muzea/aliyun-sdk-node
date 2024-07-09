export interface Create2dAvatarResponse {
    /**
     * 请求ID
     * @example `0A466686-8F3A-55A6-93D8-A0225DC965C0
    `
     */
    RequestId: string;
    /**
     * 错误码
     * @example `10010001`
     */
    Code: string;
    /**
     * 错误消息
     * @example `这个一次错误消息。`
     */
    Message: string;
    /**
     * 是否成功
     * @example `false`
     */
    Success: boolean;
    /**
     * 调用返回数据
     */
    Data: {
        /**
         * 形象code
         * @example `CH_2d_xxxxxx`
         */
        Code: string;
    };
}
