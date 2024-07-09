export interface Render3dAvatarResponse {
    /**
     * 请求ID
     * @example `4C8BF3A5-948F-1F89-AACD-D18DEF52D1XX`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
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
     * 返回结果
     */
    Data: {
        /**
         * 人物渲染数据
         * @example `{"xxxx":"xxxxxxxx"}`
         */
        RenderData: string;
    };
}
