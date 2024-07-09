export interface ListTasksResponse {
    /**
     * 返回下一页查询凭证（token）。
     * @example `ADBAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 任务总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 返回的最大数。取值范围：1~200 默认值：50。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 查询地域。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    Tasks: {
        /**
         * 任务列表。
         */
        Task: {
            /**
             * 任务类型。
             * @example `Shell`
             */
            TaskType: string;
            /**
             * 任务执行进度。
             * @example `100%`
             */
            Progress: string;
            /**
             * 任务状态。
             * @example `Finished`
             */
            TaskStatus: string;
            /**
             * 任务执行返回内容，最长1024字节。
             * @example `file1 file2`
             */
            ExecuteMsg: string;
            /**
             * 任务创建时间
             * @example `2021-04-15T10:10Z`
             */
            CreateTime: string;
            /**
             * 结束时间
             * @example `2021-04-15T10:10Z`
             */
            FinishedTime: string;
            /**
             * 实例ID。
             * @example `cp-acfmxazb4p***`
             */
            InstanceId: string;
            /**
             * 任务ID。
             * @example `t-bp67acfmxazb4p****`
             */
            TaskId: string;
        }[];
    };
}
