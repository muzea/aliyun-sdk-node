export interface GetSyntheticTaskListResponse {
    /**
     * 请求ID。
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 查询结果页面。
     */
    PageInfo: {
        /**
         * 查询结果总条数。
         * @example `15`
         */
        Total: number;
        /**
         * 任务列表信息。
         */
        List: {
            /**
             * 云拨测任务ID。
             * @example `2118709`
             */
            TaskId: string;
            /**
             * 任务名称。
             * @example `net-test`
             */
            TaskName: string;
            /**
             * 定时拨测任务地址。
             * @example `www.example.com`
             */
            Url: string;
            /**
             * 任务类型：
             * 1. 3：网页性能-IE
             * 2. 34：网页性能-Chrome
             * 3. 0：网络质量
             * 4. 40：文件下载
             * 5. 7：API性能
             * @example `0`
             */
            TaskType: number;
            /**
             * 任务类型名称
             * @example `网络质量`
             */
            TaskTypeName: string;
            /**
             * 检测点数量
             * @example `2`
             */
            MonitorNumber: number;
            /**
             * 任务启停状态。取值：
             * - **0**：停止任务。
             * - **1**：开始任务。
             * - **9**：结束任务。
             * @example `0`
             */
            TaskStatus: string;
            /**
             * 可用性，只统计最近一天的数据，如果最近一天没数据，返回空。
             * @example `0.80`
             */
            Usable: number;
            /**
             * 任务创建时间。
             * @example `1634005438000`
             */
            CreateTime: string;
        }[];
        /**
         * 每页展示数量。
         * @example `10`
         */
        Size: number;
        /**
         * 总页数。
         * @example `10`
         */
        Pages: string;
        /**
         * 前一页。
         * @example `1`
         */
        Prepage: string;
        /**
         * 后一页。
         * @example `3`
         */
        NextPage: string;
        /**
         * 是否为第一页。
         * @example `true`
         */
        IsFirstPage: boolean;
        /**
         * 是否为最后一页。
         * @example `true`
         */
        IsLastPage: boolean;
        /**
         * 是否有前一页。
         * @example `true`
         */
        HasPreviousPage: boolean;
        /**
         * 是否有下一页。
         * @example `false`
         */
        HasNextPage: string;
        /**
         * 所有导航页号。
         * @example `1,2,3`
         */
        NavigatePageNums: string;
        /**
         * 导航条上的第一页。
         * @example `1`
         */
        NavigateFirstPage: string;
        /**
         * 导航条上的最后一页。
         * @example `3`
         */
        NavigateLastPage: string;
    };
}
