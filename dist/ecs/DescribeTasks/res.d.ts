export interface DescribeTasksResponse {
    /**
     * 当前分页包含多少条目。
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页查询的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回结果的总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    TaskSet: {
        /**
         * 任务集合。
         */
        Task: {
            /**
             * 创建时间。
             * @example `2020-11-24T12:50Z`
             */
            CreationTime: string;
            /**
             * 任务状态。
             * @example `Finished`
             */
            TaskStatus: string;
            /**
             * 结束时间。
             * @example `2020-11-24T12:50Z`
             */
            FinishedTime: string;
            /**
             * 是否支持取消任务。
             * @example `true`
             */
            SupportCancel: string;
            /**
             * 任务ID。
             * @example `t-bp1hvgwromzv32iq****`
             */
            TaskId: string;
            /**
             * 任务名称。
             * @example `ImportImage`
             */
            TaskAction: string;
            /**
             * 资源ID。
             * @example `m-bp1i8huqm5u7****`
             */
            ResourceId: string;
        }[];
    };
}
