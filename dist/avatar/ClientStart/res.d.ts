export interface ClientStartResponse {
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
     * @example `10010002`
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
         * 端SDK开始工作需要连接驱动的token
         * @example `xxxxxxxxxx`
         */
        ImToken: string;
    };
}
