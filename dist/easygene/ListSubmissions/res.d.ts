export interface ListSubmissionsResponse {
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 最大返回结果
     * @example `5`
     */
    MaxResults: number;
    /**
     * 下次查询Token
     * @example `TestToken`
     */
    NextToken: string;
    /**
     * 返回个数
     * @example `5`
     */
    TotalCount: number;
    /**
     * 投递列表
     */
    Submissions: {
        /**
         * 工作空间名字
         * @example `TestWorkspace`
         */
        Workspace: string;
        /**
         * 提交ID
         * @example `sub-13BeXWnGvrOl3MC124tazcJVKaV`
         */
        SubmissionId: string;
        /**
         * 任务状态
         * @example `Succeeded`
         */
        Status: string;
        /**
         * 提交时间
         * @example `2021-06-16T15:09:14.378297+08:00`
         */
        CreateTime: string;
        /**
         * 开始时间
         * @example `2021-06-16T15:09:14.378297+08:00`
         */
        StartTime: string;
        /**
         * 结束时间
         * @example `2021-06-16T15:09:14.378297+08:00`
         */
        EndTime: string;
        /**
         * 实体类型
         * @example `TestEntityType`
         */
        EntityType: string;
        /**
         * 运行状态统计
         */
        RunStats: {
            /**
             * 已提交数量
             * @example `5`
             */
            Submitted: number;
            /**
             * 等待中数量
             * @example `5`
             */
            Pending: number;
            /**
             * 运行中数量
             * @example `5`
             */
            Running: number;
            /**
             * 已成功数量
             * @example `5`
             */
            Succeeded: number;
            /**
             * 已失败数量
             * @example `5`
             */
            Failed: number;
            /**
             * 取消中数量
             * @example `5`
             */
            Aborting: number;
            /**
             * 已取消数量
             * @example `5`
             */
            Aborted: number;
        };
    }[];
}
