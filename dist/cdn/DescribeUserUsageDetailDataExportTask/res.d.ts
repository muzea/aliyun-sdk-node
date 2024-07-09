export interface DescribeUserUsageDetailDataExportTaskResponse {
    /**
     * 请求ID。
     * @example `A91BE91F-0B34-4CBF-8E0F-A2977E15AA52`
     */
    RequestId: string;
    /**
     * 每页的用量数据。
     */
    UsageDataPerPage: {
        /**
         * 每页记录数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 当前页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 总记录数。
         * @example `1`
         */
        TotalCount: number;
        Data: {
            /**
             * 任务信息。
             */
            DataItem: {
                /**
                 * 任务状态。
                 * @example `success`
                 */
                Status: string;
                /**
                 * 任务最后更新时间。
                 * @example `2018-10-09T06:35:46Z`
                 */
                UpdateTime: string;
                /**
                 * 下载地址。
                 * @example `https://test.oss-cn-beijing.aliyuncs.com/billing_data/xxx`
                 */
                DownloadUrl: string;
                /**
                 * 任务创建时间。
                 * @example `2018-10-09T06:33:38Z`
                 */
                CreateTime: string;
                /**
                 * 任务名称。
                 * @example `刷新`
                 */
                TaskName: string;
                /**
                 * 任务ID。
                 * @example `11`
                 */
                TaskId: string;
                /**
                 * 任务配置。
                 */
                TaskConfig: {
                    /**
                     * 查询用量数据的结束时间。
                     * @example `2018-08-31T15:59:59Z`
                     */
                    EndTime: string;
                    /**
                     * 查询用量数据的起始时间。
                     * @example `2018-07-31T16:00:00Z`
                     */
                    StartTime: string;
                };
            }[];
        };
    };
}
