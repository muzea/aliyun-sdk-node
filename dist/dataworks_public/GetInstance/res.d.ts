export interface GetInstanceResponse {
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
     * 调度实例失败时的异常信息。
     * @example `test`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 实例的详细信息。
     */
    Data: {
        /**
         * 任务的状态，取值如下：
         * - NOT_RUN（未运行）
         * - WAIT_TIME（等待定时时间dueTime或cycleTime到来）
         * - WAIT_RESOURCE（等待资源）
         * - RUNNING（运行中）
         * - CHECKING（下发给数据质量进行数据校检）
         * - CHECKING_CONDITION（正在进行分支条件校检）
         * - FAILURE（执行失败）
         * - SUCCESS（执行成功）
         * @example `NOT_RUN`
         */
        Status: string;
        /**
         * 实例的定时时间。
         * @example `1590422400000`
         */
        CycTime: number;
        /**
         * 实例开始运行的时间。
         * @example `1590416703313`
         */
        BeginRunningTime: number;
        /**
         * 实例运行的结束时间。
         * @example `1590416703313`
         */
        FinishTime: number;
        /**
         * 实例的创建时间。
         * @example `1590416703313`
         */
        CreateTime: number;
        /**
         * 工作流的ID。
         * @example `338450167`
         */
        DagId: number;
        /**
         * 实例运行优先级，取值分为1、3、5、7和8。取值越大，优先级越高。默认优先级为1。
         * @example `1`
         */
        Priority: number;
        /**
         * 实例的调度类型，取值如下：
         * - NORMAL(0)：正常调度任务。该任务被日常调度。
         * - MANUAL(1)：手动任务。该任务不会被日常调度。
         * - PAUSE(2)：冻结任务。该任务被日常调度，但启动调度时直接被置为失败状态。
         * - SKIP(3)：空跑任务。该任务被日常调度，但启动调度时直接被置为成功状态。
         * - SKIP_UNCHOOSE(4)：临时工作流中未选择的任务，仅存在于临时工作流中，启动调度时直接被置为成功状态。
         * - SKIP_CYCLE(5)：未到运行周期的周或月任务。该任务被日常调度，但启动调度时直接被置为成功状态。
         * - CONDITION_UNCHOOSE(6)：上游实例中有分支（IF）节点，但是该下游节点未被分支节点选中，直接置为空跑任务。
         * - REALTIME_DEPRECATED(7)：实时生成的已经过期的周期实例，该类型的任务直接被置为成功状态。
         * @example `NORMAL(0)`
         */
        TaskType: string;
        /**
         * 参数信息。
         * @example `bizdate=$bizdate tbods=$tbods tbdw=$tbdw tbpmic=$tbpmic tbpidx=$tbpidx tbptcif=$tbptcif`
         */
        ParamValues: string;
        /**
         * 连接串。
         * @example `odps_source`
         */
        Connection: string;
        /**
         * 基线ID。
         * @example `123123`
         */
        BaselineId: number;
        /**
         * 数据质量DQC类型，取值如下：
         * - 0表示有关联dqc。
         * - 1表示没有关联dqc。
         * @example `1`
         */
        DqcType: number;
        /**
         * 工作流的类型，取值如下：
         * - DAILY（日常调度）
         * - MANUAL（手动任务）
         * - SMOKE_TEST（冒烟测试）
         * - SUPPLY_DATA（补数据）
         * @example `DAILY`
         */
        DagType: string;
        /**
         * 业务流程ID。
         * @example `123`
         */
        BusinessId: number;
        /**
         * 实例还可以重跑的次数。取值可以为空、以及大于等于0的整数。
         * - 取值为空，表示该实例对应的节点没有设置重跑次数。
         * - 取值为0，表示该实例对应的节点不能再重跑。
         * - 取值为大于0的整数（假设为n），表示该实例对应的节点剩余重跑次数为n。例如，该参数取值为1，则剩余重跑次数为1，取值为2，则剩余重跑次数为2，以此类推。
         * @example `0`
         */
        TaskRerunTime: number;
        /**
         * 实例的最新修改时间。
         * @example `1590416703313`
         */
        ModifyTime: number;
        /**
         * 实例是否可以重复执行。
         * @example `true`
         */
        Repeatability: boolean;
        /**
         * 调度任务运行出错后，重新调整调度频率，单位为毫秒（ms）。
         * @example `60000`
         */
        RepeatInterval: number;
        /**
         * 实例的ID。
         * @example `11713307578`
         */
        InstanceId: number;
        /**
         * 实例开始等待资源的时间。
         * @example `1590416703313`
         */
        BeginWaitResTime: number;
        /**
         * 关联的业务流程ID。
         * @example `123123`
         */
        RelatedFlowId: number;
        /**
         * 业务日期。通常为该任务运行时间的前一天。
         * @example `1590336000000`
         */
        Bizdate: number;
        /**
         * 节点的名称。
         * @example `kzh`
         */
        NodeName: string;
        /**
         * 实例开始等待调度的时间。
         * @example `1590416703313`
         */
        BeginWaitTimeTime: number;
        /**
         * DQC分区规则串。
         * @example `[{"projectName":"ztjy_dim","tableName":"dim_user_agent_manage_area_a","partition":"ds\u003d$[yyyy-mm-dd-1]"}]`
         */
        DqcDescription: string;
        /**
         * 节点的ID。
         * @example `33115`
         */
        NodeId: number;
        /**
         * 实例创建人。
         * @example `111`
         */
        CreateUser: string;
    };
}
