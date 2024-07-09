export interface DescribeInstanceMonitorDataResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    MonitorData: {
        /**
         * 实例的监控数据InstanceMonitorDataType组成的集合。
         */
        InstanceMonitorData: {
            /**
             * 实例vCPU的使用情况，为原始数据，如0.02，则使用率为2%。
             * @example `0.02`
             */
            CPU: string;
            /**
             * 实例ID。
             * @example `yourInstance ID`
             */
            InstanceId: string;
            /**
             * 该字段暂不支持返回参数。
             * @example `暂不支持`
             */
            Memory: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `C8B26B44-0189-443E-9816-D951F59623A9`
     */
    RequestId: string;
}
