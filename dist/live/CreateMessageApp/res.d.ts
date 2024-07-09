export interface CreateMessageAppResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-****-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 互动消息应用ID。
         * @example `VKL3***`
         */
        AppId: string;
    };
}
