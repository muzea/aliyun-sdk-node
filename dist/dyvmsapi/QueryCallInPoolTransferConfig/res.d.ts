export interface QueryCallInPoolTransferConfigResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7BF47617-7851-48F7-A3A1-2021342A78E2`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 创建时间。
         * @example `1623137002000`
         */
        GmtCreate: number;
        /**
         * 呼叫模式。取值：
         * - **roundRobin**：轮询。
         * - **random**：随机。
         * @example `random`
         */
        CalledRouteMode: string;
        /**
         * 超时时长。
         * @example `30`
         */
        TransferTimeout: string;
        /**
         * 返回结果详情。
         */
        Details: {
            /**
             * 呼转号码。
             * @example `400903****`
             */
            Called: string;
        }[];
    };
}
