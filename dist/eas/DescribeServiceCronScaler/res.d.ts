export interface DescribeServiceCronScalerResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务名称。
     * @example `foo`
     */
    ServiceName: string;
    /**
     * 已排除的时间点的Cron表达式列表。
     */
    ExcludeDates: string[];
    /**
     * 定时伸缩任务列表。
     */
    ScaleJobs: {
        /**
         * 伸缩任务的Cron表达式。
         * @example `0 18 * * * *`
         */
        Schedule: string;
        /**
         * 伸缩任务的目标实例数。
         * @example `1`
         */
        TargetSize: number;
        /**
         * 伸缩任务的名称。
         * @example `scale-job-1`
         */
        Name: string;
        /**
         * 最后一次定时任务的详细信息。
         * @example `"cron hpa job scale-jobs-0 executed successfully. current replicas:3, desired replicas:2."`
         */
        Message: string;
        /**
         * 最后一次定时任务的状态。
         * @example `Succeed`
         */
        State: string;
        /**
         * 最后一次定时任务的运行UTC时间。
         * @example `2022-02-24T06:31:00Z`
         */
        LastProbeTime: string;
        /**
         * 最后一次定时任务创建UTC时间。
         * @example `2020-06-24T02:11:30Z`
         */
        CreateTime: string;
    }[];
}
