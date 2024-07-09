export interface GetManualDagInstancesResponse {
    /**
     * 请求的唯一标识。
     * @example `SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF`
     */
    RequestId: string;
    /**
     * 手动业务流程的内部实例列表。
     */
    Instances: {
        /**
         * 实例任务的状态，取值如下：
         * - NOT_RUN（未运行）
         * - WAIT_TIME（等待定时时间dueTime或cycleTime到来）
         * - WAIT_RESOURCE（等待资源）
         * - RUNNING（运行中）
         * - CHECKING（下发给数据质量进行数据校检）
         * - CHECKING_CONDITION（正在进行分支条件校检）
         * - FAILURE（执行失败）
         * - SUCCESS（执行成功）
         * @example `WAIT_TIME`
         */
        Status: string;
        /**
         * 实例任务开始运行的时间。
         * @example `1605178414676`
         */
        BeginRunningTime: number;
        /**
         * 业务日期。通常为该任务运行时间的前一天。
         * @example `1605178414676`
         */
        BizDate: number;
        /**
         * 实例任务的定时时间。
         * @example `1605178414676`
         */
        CycTime: number;
        /**
         * 实例任务运行的结束时间。
         * @example `1605178414676`
         */
        FinishTime: number;
        /**
         * 实例任务的创建时间。
         * @example `1605178414676`
         */
        CreateTime: number;
        /**
         * 手动业务流程实例的DagId。
         * @example `350850491`
         */
        DagId: number;
        /**
         * 内部实例ID。
         * @example `11726873619`
         */
        InstanceId: number;
        /**
         * 实例任务开始等待资源的时间。
         * @example `1605178414676`
         */
        BeginWaitResTime: number;
        /**
         * 实例任务的调度类型，取值如下：
         * - NORMAL(0)：正常调度任务。该任务被日常调度。
         * - MANUAL(1)：手动任务。该任务不会被日常调度。
         * - PAUSE(2)：暂停任务。该任务被日常调度，但启动调度时直接被置为失败状态。
         * - SKIP(3)：空跑任务。该任务被日常调度，但启动调度时直接被置为成功状态。
         * - SKIP_UNCHOOSE(4)：临时工作流中未选择的任务，仅存在于临时工作流中，启动调度时直接被置为成功状态。
         * - SKIP_CYCLE(5)：未到运行周期的周或月任务。该任务被日常调度，但启动调度时直接被置为成功状态。
         * - CONDITION_UNCHOOSE(6)：上游实例中有分支（IF）节点，但是该下游节点未被分支节点选中，直接置为空跑任务。
         * - REALTIME_DEPRECATED(7)：实时生成的已经过期的周期实例，该类型的任务直接被置为成功状态。
         * @example `NORMAL(0)`
         */
        TaskType: string;
        /**
         * 实例的参数信息。
         * @example `xxx`
         */
        ParamValues: string;
        /**
         * 手动业务流程的类型。
         * @example `5`
         */
        DagType: string;
        /**
         * 节点名称。
         * @example `test2`
         */
        NodeName: string;
        /**
         * 实例任务开始等待调度的时间。
         * @example `1605178414676`
         */
        BeginWaitTimeTime: number;
        /**
         * 业务流程的内部节点ID。
         * @example `37851`
         */
        NodeId: number;
        /**
         * 实例任务最新的修改时间。
         * @example `1605178414676`
         */
        ModifyTime: number;
        /**
         * 操作人。
         * @example `xxx`
         */
        CreateUser: string;
    }[];
}
