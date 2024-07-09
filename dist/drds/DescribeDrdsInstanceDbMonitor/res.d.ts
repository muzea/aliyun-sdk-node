export interface DescribeDrdsInstanceDbMonitorResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `2F7F8080-9132-4279-85D0-B7E5C4******`
     */
    RequestId: string;
    /**
     * 监控数据列表。
     */
    Data: {
        /**
         * 监控指标的名称。
         * @example `qps`
         */
        Key: string;
        /**
         * 监控指标的单位。
         * @example `qps`
         */
        Unit: string;
        /**
         * 监控数据值详情。
         */
        Values: {
            /**
             * 获取该监控数据值的时间点，格式为Unix时间戳，单位为毫秒。
             * @example `1603162805000`
             */
            Date: number;
            /**
             * 数据值。
             * @example `0`
             */
            Value: string;
        }[];
    }[];
}
