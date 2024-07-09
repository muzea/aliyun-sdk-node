export interface DescribeTasksResponse {
    /**
     * 请求 ID
     * @example `86FFBA6E-D087-53E0-8593-4575925CB9DC`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `successful`
     */
    Message: string;
    /**
     * 分页大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询的当前页码。
     * @example `3`
     */
    PageNumber: number;
    /**
     * 总条数。
     * @example `53`
     */
    TotalCount: number;
    Tasks: {
        /**
         * 任务列表。
         */
        task: {
            /**
             * 任务进度百分比。
             * @example `90`
             */
            Progress: number;
            /**
             * 最后修改时间
             * @example `1637292645`
             */
            UpdatedTime: number;
            /**
             * 任务状态
             * @example `hdr.task.completed`
             */
            StatusCode: string;
            /**
             * 任务的目标
             * @example `sr-000ftuch27gfuv8wvpyj`
             */
            TargetName: string;
            /**
             * 任务名称
             * @example `CommitFailoverTask`
             */
            Name: string;
            /**
             * 任务创建时间
             * @example `1636092147`
             */
            CreatedTime: number;
            /**
             * 任务ID。
             * @example `t-0007wl5r0hvxrp3c3x8z`
             */
            TaskId: string;
        }[];
    };
}
