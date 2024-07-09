export interface ListInnerNodesResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 分页信息
     */
    Paging: {
        /**
         * 页码数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 符合条件的节点总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 内部节点列表。
         */
        Nodes: {
            /**
             * 调度的类型，取值如下：
             * - NORMAL：正常调度任务。
             * - MANUAL：手动任务，不会被日常调度。
             * - PAUSE：暂停任务。
             * - SKIP：空跑任务，被日常调度，但启动调度时直接被置为成功。
             * @example `NORMAL`
             */
            SchedulerType: string;
            /**
             * 出错后重新调度频率。
             * @example `60`
             */
            RepeatInterval: number;
            /**
             * 是否可以重复运行。
             * @example `true`
             */
            Repeatability: boolean;
            /**
             * 工作空间的ID。
             * @example `123`
             */
            ProjectId: number;
            /**
             * 节点的类型。
             * @example `ODPS_SQL`
             */
            ProgramType: string;
            /**
             * 优先级，1/3/5/7/8
             * @example `1`
             */
            Priority: number;
            /**
             * 负责人的ID。
             * @example `1933****36551`
             */
            OwnerId: string;
            /**
             * 连接串。
             * @example `odps_source`
             */
            Connection: string;
            /**
             * 额外的参数。
             * @example `a=b`
             */
            ParamValues: string;
            /**
             * DQC类型，0表示有关联dqc，1表示没有关联dqc。
             * @example `1`
             */
            DqcType: string;
            /**
             * 基线ID。
             * @example `1234`
             */
            BaselineId: number;
            /**
             * 节点的描述信息。
             * @example `test`
             */
            Description: string;
            /**
             * 节点的名称。
             * @example `liux_test_n****`
             */
            NodeName: string;
            /**
             * 资源组的名称。
             * @example `默认资源组`
             */
            ResGroupName: string;
            /**
             * 业务流程ID。
             * @example `123`
             */
            BusinessId: number;
            /**
             * DQC分区规则串。
             * @example `[{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\u003d$[yyyy-mm-dd-1]"}]`
             */
            DqcDescription: string;
            /**
             * cron表达式。
             * @example `00 00 00 * * ?`
             */
            CronExpress: string;
            /**
             * 节点的ID。
             * @example `12`
             */
            NodeId: number;
        }[];
    };
}
