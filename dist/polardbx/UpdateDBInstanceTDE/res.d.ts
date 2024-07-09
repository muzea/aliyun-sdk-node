export interface UpdateDBInstanceTDEResponse {
    /**
     * 请求ID。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    RequestId: string;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * 后端任务ID。
         * @example `42292****`
         */
        TaskId: string;
    };
}
