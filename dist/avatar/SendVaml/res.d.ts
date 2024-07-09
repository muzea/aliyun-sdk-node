export interface SendVamlResponse {
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
         * @example `76898bd3b90b4a65b1c078d8824a2e9c`
         */
        SessionId: string;
        /**
         * 请求唯一code,对应vaml内容中的uniqueCode
         * @example `0000001000586737`
         */
        UniqueCode: string;
    };
}
