export interface ListNodesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 节点的列表。
     */
    Data: {
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
         * @example `66`
         */
        TotalCount: number;
        /**
         * 节点的信息。
         */
        Nodes: {
            /**
             * 调度的类型，取值如下：
             * - NORMAL：正常调度任务。
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
             * @example `33671`
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
             * @example `19337906836551`
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
             * 关联业务流程ID。
             * @example `1231123`
             */
            RelatedFlowId: number;
            /**
             * DQC类型，0表示没有关联dqc，1表示有关联dqc。
             * @example `1`
             */
            DqcType: number;
            /**
             * 基线ID。
             * @example `123456`
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
             * @example `1234`
             */
            NodeId: number;
            /**
             * 资源组标识
             * @example `group_123`
             */
            ResGroupIdentifier: string;
            /**
             * 文件类型
             * @example `10`
             */
            FileType: number;
            FileId: number;
            FileVersion: number;
            DeployDate: number;
            CreateTime: number;
            ModifyTime: number;
        }[];
    };
}
