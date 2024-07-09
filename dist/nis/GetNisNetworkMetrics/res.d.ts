export interface GetNisNetworkMetricsResponse {
    /**
     * 请求ID。
     * @example `D5E98683-355B-5867-8D3D-A24755F6895B`
     */
    RequestId: string;
    /**
     * 云网络指标趋势数据对象。
     */
    Data: {
        /**
         * 单位。
         * @example `Bits/Second`
         */
        Unit: string;
        /**
         * 指标趋势数据集合。
         */
        Metrics: {
            /**
             * 数据的毫秒时间戳。
             * @example `1690684091100`
             */
            TimeStamp: number;
            /**
             * 指标值。
             * @example `88`
             */
            Value: number;
        }[];
    };
}
