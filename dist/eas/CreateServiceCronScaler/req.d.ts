export interface CreateServiceCronScalerRequest {
    /**
     * 服务所在地域。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 定时伸缩任务描述。
         */
        ScaleJobs: {
            /**
             * 执行伸缩任务的目标实例数。
             * @example `1`
             */
            TargetSize: number;
            /**
             * 要执行伸缩任务的Cron表达式。如何配置Cron表达式，请参见**请求参数补充说明**章节。
             * @example `0 18 * * * *`
             */
            Schedule: string;
            /**
             * 定时扩缩容任务名称。
             * @example `scale-job-1`
             */
            Name: string;
        }[];
        /**
         * 需要排除的时间点的Cron表达式列表。
         */
        ExcludeDates: string[];
    };
}
