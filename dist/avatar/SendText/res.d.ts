export interface SendTextResponse {
    /**
     * Id of the request
     * @example `0A466686-8F3A-55A6-93D8-A0225DC965C0
    `
     */
    RequestId: string;
    /**
     * 返回处理异常对应code
     * @example `10010001`
     */
    Code: string;
    /**
     * 返回处理异常对应描述
     * @example `operation success.
    `
     */
    Message: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 会话ID
         * @example `9929391f61ef9e1c0000000000000006
        `
         */
        SessionId: string;
        /**
         * 请求唯一code
         * @example `0000001000586737`
         */
        UniqueCode: string;
    };
}
