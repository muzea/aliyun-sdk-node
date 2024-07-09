export interface CreateCalculationJobsRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * AB实验指标ID列表，使用逗号分隔。
         * @example `2,3,4`
         */
        ABMetricIds: string;
        /**
         * 开始日期。
         * @example `2023-01-01`
         */
        StartDate: string;
        /**
         * 结束日期。
         * @example `2023-01-03`
         */
        EndDate: string;
        /**
         * 实例ID，可从接口[ListInstances](~~2411819~~)获取。
         * @example `pairec-cn-test1`
         */
        InstanceId: string;
    };
}
