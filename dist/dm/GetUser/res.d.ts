export interface GetUserResponse {
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    /**
     * 返回内容
     */
    Data: {
        /**
         * 是否启用了EventBridge
         * @example `true`
         */
        EnableEventbridge: boolean;
    };
}
