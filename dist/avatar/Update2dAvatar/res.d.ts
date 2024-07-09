export interface Update2dAvatarResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7
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
     * @example `这是一个错误`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `false`
     */
    Success: boolean;
    /**
     * 调用返回数据
     */
    Data: {
        /**
         * 形象code
         * @example `CH_2d_xxxxxx
        `
         */
        Code: string;
    };
}
