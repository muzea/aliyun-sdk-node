export interface DescribeDBInstanceSupportMaxPerformanceResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `gp-bp***************`
     */
    DBInstanceId: string;
    Performances: {
        /**
         * 性能指标对象数组
         */
        Performance: {
            /**
             * 性能指标名称。
             * @example `max_throughput：最大吞吐，max_iops：最大IOPS`
             */
            Key: string;
            /**
             * 指标值
             * @example `90`
             */
            Value: string;
            /**
             * 性能瓶颈类型。
             * @example `ecs or disk`
             */
            Bottleneck: string;
            /**
             * 性能参数的单位。
             * @example `最大吞吐：MB/s
            最大IOPS：times/s`
             */
            Unit: string;
        }[];
    };
}
