export interface DescribeUserUsageDataExportTaskResponse {
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
         * @example `10`
         */
        TotalCount: number;
        Data: {
            /**
             * 任务信息。
             */
            DataItem: {
                /**
                 * 任务状态。
                 * - created：创建中。
                 * - success：成功。
                 * - failed：失败。
                 * @example `success`
                 */
                Status: string;
                /**
                 * 任务最后更新时间。
                 * @example `2019-12-31T08:45:02Z`
                 */
                UpdateTime: string;
                /**
                 * 下载地址。
                 * @example `https://cdn-polaris.xxxx`
                 */
                DownloadUrl: string;
                /**
                 * 任务创建时间。
                 * @example `2019-12-31T08:43:21Z`
                 */
                CreateTime: string;
                /**
                 * 任务名称。
                 * @example `刷新`
                 */
                TaskName: string;
                /**
                 * 任务ID。
                 * @example `A91BE91F-0B34-4CBF-8E0F-A2977`
                 */
                TaskId: string;
                /**
                 * 任务配置。
                 */
                TaskConfig: {
                    /**
                     * 用量结束时间。
                     * @example `2019-12-30T15:59:59Z`
                     */
                    EndTime: string;
                    /**
                     * 用量起始时刻。
                     * @example `2019-12-29T16:00:00Z`
                     */
                    StartTime: string;
                };
            }[];
        };
    };
}
