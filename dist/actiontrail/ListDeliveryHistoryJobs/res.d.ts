export interface ListDeliveryHistoryJobsResponse {
    /**
     * 任务数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `B190816C-6DCA-4DC5-9B8E-EE0367B57CFF`
     */
    RequestId: string;
    /**
     * 任务列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 投递历史事件任务列表。
     */
    DeliveryHistoryJobs: {
        /**
         * 跟踪名称。
         * @example `trail-name`
         */
        TrailName: string;
        /**
         * 任务结束时间。
         * @example `2021-04-26T03:22:04Z`
         */
        EndTime: string;
        /**
         * 任务开始时间。
         * @example `2021-01-26T03:17:04Z`
         */
        StartTime: string;
        /**
         * 任务状态。取值：
         * - 0：任务正在初始化。
         * - 1：任务投递中。
         * - 2：任务投递完成。
         * - 3：任务投递失败。
         * @example `2`
         */
        JobStatus: number;
        /**
         * Home地域。
         * @example `cn-hangzhou`
         */
        HomeRegion: string;
        /**
         * 任务更新时间。
         * @example `2021-04-26T03:20:08Z`
         */
        UpdatedTime: string;
        /**
         * 任务ID。
         * @example `16602`
         */
        JobId: number;
        /**
         * 任务创建时间。
         * @example `2021-04-26T03:17:04Z`
         */
        CreatedTime: string;
    }[];
}
