export interface ListNodesByOutputResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `SDFSDFSDF-asdfDFSDF-SDFSDf-SDfSFD`
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
     * 返回的目标节点信息列表。
     */
    Data: {
        /**
         * 当前节点的输出名称。
         * @example `test_0709_1.630003556_out`
         */
        Output: string;
        /**
         * input和output对应的节点信息列表。
         */
        NodeList: {
            /**
             * 节点任务的调度类型，取值如下：
             * - NORMAL：正常调度任务。该任务被日常调度。
             * - MANUAL：手动任务。该任务不会被日常调度。
             * - PAUSE：冻结任务。该任务被日常调度，但启动调度时直接被置为失败状态。
             * - SKIP：空跑任务。该任务被日常调度，但启动调度时直接被置为成功状态。
             * @example `NORMAL`
             */
            SchedulerType: string;
            /**
             * 节点运行出错后重新调度的频率。
             * @example `60`
             */
            RepeatInterval: number;
            /**
             * 是否可以重复运行。
             * @example `true`
             */
            Repeatability: boolean;
            /**
             * 节点的类型。
             * 常用的节点类型如下：
             * 6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
             * @example `ODPS_SQL`
             */
            FileType: string;
            /**
             * 工作空间的ID。
             * @example `33671`
             */
            ProjectId: number;
            /**
             * 节点的类型。该参数已废弃，节点类型请参考FileType。
             * @example `ODPS_SQL`
             */
            ProgramType: string;
            /**
             * 节点运行的优先级，取值分为1、3、5、7和8。取值越大，优先级越高。默认优先级为1。
             * @example `1`
             */
            Priority: number;
            /**
             * 负责人的ID。
             * @example `19337906836551`
             */
            OwnerId: string;
            /**
             * 数据源名称。
             * @example `odps_source`
             */
            Connection: string;
            /**
             * 节点的调度参数。
             * @example `a=b`
             */
            ParamValues: string;
            /**
             * 关联的业务流程ID。
             * @example `1235655464`
             */
            RelatedFlowId: number;
            /**
             * DQC类型，0表示有关联dqc，1表示没有关联dqc。
             * @example `1`
             */
            DqcType: number;
            /**
             * 基线ID。
             * @example `1235667`
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
             * @example `125677`
             */
            NodeId: number;
        }[];
    }[];
}
