export interface DescribeRDSPerformanceResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `DB53EC68-463C-4187-8D2B-C2AD8C******`
     */
    RequestId: string;
    /**
     * 查询结果集。
     */
    Data: {
        /**
         * 监控指标名称。
         * @example `cpuusage`
         */
        Key: string;
        /**
         * 节点名称。
         * >仅数据库存储类型为PolarDB MySQL时返回该参数，RDS MySQL不会返回该参数。
         * @example `pi-*************`
         */
        NodeName: string;
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
             * @example `1603209660000`
             */
            Date: number;
            /**
             * 监控指标数值。
             * @example `0.58`
             */
            Value: string;
        }[];
    }[];
}
