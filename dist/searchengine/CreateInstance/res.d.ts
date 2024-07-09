export interface CreateInstanceResponse {
    /**
     * 请求ID
     * @example `D39EE0F1-D7EF-5F46-B781-6BF4185308B0`
     */
    requestId: string;
    /**
     * 返回结果。
     */
    result: {
        /**
         * 实例id
         * @example `ha-cn-pl32rf0****`
         */
        instanceId: string;
    };
}
