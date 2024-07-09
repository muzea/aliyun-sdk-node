export interface GetNodeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求的ID，用于定位日志，排查问题。
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
     * 节点的详情。
     */
    Data: {
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
        Repeatability: string;
        /**
         * 工作空间的ID。
         * @example `1234`
         */
        ProjectId: number;
        /**
         * 节点的类型。
         * @example `ODPS_SQL`
         */
        ProgramType: string;
        /**
         * 任务优先级，1/3/5/7/8。
         * @example `1`
         */
        Priority: number;
        /**
         * 负责人的ID。
         * @example `17366294****`
         */
        OwnerId: string;
        /**
         * 连接串。
         * @example `odps_source_dev`
         */
        Connection: string;
        /**
         * 额外的参数。
         * @example `a=b`
         */
        ParamValues: string;
        /**
         * 关联业务流程ID。
         * @example `123`
         */
        RelatedFlowId: number;
        /**
         *  DQC类型，0表示没有关联dqc，1表示有关联dqc。
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
         * @example `sql节点`
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
         * @example `[{"projectName":"test_0923001","tableName":"test_table_001","partition":"ds\u003d$[yyyymmdd]"},{"projectName":"test_0923001","tableName":"test_table_002","partition":"NOTAPARTITIONTABLE"}]`
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
         * 资源组唯一标示。
         * @example `group_123`
         */
        ResGroupIdentifier: string;
        /**
         * 文件的代码类型。常用的代码及其对应的文件类型包括6（Shell）、10（ODPS SQL）、11（ODPS MR）、23（数据集成）、24（ODPS Script）、99（虚拟节点）、221（PyODPS 2）、225（ODPS Spark）、227（EMR Hive）、228（EMR Spark）、229（EMR Spark SQL）、230（EMR MR）、239（OSS对象检查）、257（EMR Shell）、258（EMR Spark Shell）、259（EMR Presto）、260（EMR Impala）、900（实时同步）、1089（跨租户节点）、1091（Hologres开发）、1093（Hologres SQL）、1100（赋值节点）、1221（PyODPS 3）。
         * @example `10`
         */
        FileType: number;
        FileId: number;
        FileVersion: number;
        DeployDate: number;
        CreateTime: number;
        ModifyTime: number;
    };
}
