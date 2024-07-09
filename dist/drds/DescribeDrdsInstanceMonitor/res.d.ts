export interface DescribeDrdsInstanceMonitorResponse {
    /**
     * 请求ID。
     * @example `2F7F8080-9132-4279-85D0-B7E5C4`
     */
    RequestId: string;
    /**
     * 查询结果集。
     */
    Data: {
        /**
         * 监控指标名称。
         * @example `cpu`
         */
        Key: string;
        /**
         * 监控指标的单位。
         * @example `%`
         */
        Unit: string;
        /**
         * 节点数量。
         * @example `1`
         */
        NodeNum: number;
        /**
         * 监控指标数据详情。
         */
        Values: {
            /**
             * 获取监控指标数值的时间点，格式为Unix时间戳（UTC时间），单位为毫秒。
             * @example `1603163400000`
             */
            Date: number;
            /**
             * 监控指标数值。
             * @example `1.40`
             */
            Value: string;
        }[];
    }[];
}
