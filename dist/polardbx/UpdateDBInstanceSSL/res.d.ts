export interface UpdateDBInstanceSSLResponse {
    /**
     * 请求ID。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    RequestId: string;
    /**
     * 请求返回数据。
     */
    Data: {
        /**
         * 后端任务ID。
         * @example `2209883`
         */
        TaskId: number;
    };
}
