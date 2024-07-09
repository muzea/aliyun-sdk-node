export interface ListInstanceHistoryResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 实例列表
     */
    Instances: {
        /**
         * 任务的状态，取值如下：
         * - NOT_RUN（未运行）
         * - WAIT_TIME（等待定时时间DueTime或CycTime到来）
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
         * 调度任务的运行时间，返回时间戳格式。
         * @example `1590422400000`
         */
        CycTime: number;
        /**
         * 实例开始运行的时间，返回时间戳格式。
         * @example `1590416703313`
         */
        BeginRunningTime: number;
        /**
         * 调度任务的结束时间，返回时间戳格式。
         * @example `1590416703313`
         */
        FinishTime: number;
        /**
         * 实例运行的报错信息。该字段已废弃，您可以调用GetInstanceLog接口获取执行任务的相关报错信息。
         * @example `error message`
         */
        ErrorMessage: string;
        /**
         * 实例的创建时间。
         * @example `1590416703313`
         */
        CreateTime: number;
        /**
         * 工作流的ID。
         * @example `33845`
         */
        DagId: number;
        /**
         * 任务实例的调度类型，取值如下：
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
         * DQC类型，取值如下：
         * - 0表示有关联dqc。
         * - 1表示没有关联dqc。
         * @example `1`
         */
        DagType: string;
        /**
         * 调度任务的最新修改时间。
         * @example `1590416703313`
         */
        ModifyTime: number;
        /**
         * 实例的ID。
         * @example `1234`
         */
        InstanceId: number;
        /**
         * 实例任务开始等待资源的时间。
         * @example `1590416703313`
         */
        BeginWaitResTime: number;
        /**
         * 执行调度任务的日期。通常为该任务运行时间的前一天。
         * @example `1590336000000`
         */
        Bizdate: number;
        /**
         * 节点的名称。
         * @example `kzh`
         */
        NodeName: string;
        /**
         * 实例任务开始等待调度的时间。
         * @example `1590416703313`
         */
        BeginWaitTimeTime: number;
        /**
         * 节点的ID。
         * @example `33115`
         */
        NodeId: number;
        /**
         * 实例的历史档案编号。
         * @example `1`
         */
        InstanceHistoryId: number;
    }[];
}
