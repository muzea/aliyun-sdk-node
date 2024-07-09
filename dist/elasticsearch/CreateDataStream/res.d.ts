export interface CreateDataStreamResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DCC****`
     */
    RequestId: string;
    /**
     * 返回创建的数据流名称。
     */
    Result: {
        /**
         * 数据流名称。
         * @example `ds-`
         */
        name: string;
    };
}
