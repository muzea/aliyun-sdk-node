export interface DescribeDiagnosisTasksResponse {
    /**
     * 请求ID。
     * @example `F0983B43-B2EC-536A-8791-142B5CF1E9B6`
     */
    RequestId: string;
    /**
     * 子任务列表。
     */
    TaskList: {
        /**
         * 带数据源的任务的扫描数据耗时。单位：毫秒（ms）。
         * @example `0`
         */
        ScanCost: number;
        /**
         * 任务的输出数据量。单位：Byte。
         * @example `123`
         */
        OutputDataSize: number;
        /**
         * 任务的输入数据量。单位：Byte。
         * @example `123`
         */
        InputDataSize: number;
        /**
         * 任务最终执行状态：
         * - FINISHED：完成。
         * - CANCELED：取消。
         * - ABORTED：中止。
         * - FAILED：失败。
         * @example `FINISHED`
         */
        State: string;
        /**
         * 任务在某个节点的算子总耗时，为多线程累加值，可用于判断计算是否存在长尾。单位：毫秒（ms）。
         * @example `3`
         */
        OperatorCost: number;
        /**
         * 任务的输出数据行数。
         * @example `105`
         */
        OutputRows: number;
        /**
         * 任务的扫描数据量，单位：Byte。
         * @example `123`
         */
        ScanDataSize: number;
        /**
         * 任务从创建到结束的时长。单位：毫秒（ms）。
         * @example `456`
         */
        ElapsedTime: number;
        /**
         * 带数据源的任务的扫描数据行数。
         * @example `0`
         */
        ScanRows: number;
        /**
         * 任务的峰值内存，单位Byte。
         * @example `234`
         */
        PeakMemory: number;
        /**
         * 任务ID。
         * @example `22568****`
         */
        TaskId: string;
        /**
         * 任务的输入数据行数。
         * @example `105`
         */
        InputRows: number;
        /**
         * 任务创建时间戳。
         * @example `2022-12-12 00:00:12`
         */
        TaskCreateTime: number;
        /**
         * 任务实际结束的时间戳。
         * @example `2022-12-22 00:00:00`
         */
        TaskEndTime: number;
        /**
         * 任务机器的IP。
         * @example `192.168.XX.XX`
         */
        TaskHost: string;
        /**
         * 任务执行的并行度。
         * @example `16`
         */
        Drivers: string;
        /**
         * 任务执行前的排队时间，单位：毫秒（ms）。
         * @example `12`
         */
        QueuedTime: string;
        /**
         * 任务所有算子的累加耗时除以任务的并行度后，和ElapsedTime的比值，可用于判断任务的是否为真正耗时的任务。如果比值较大，说明该任务大部分时间在实际执行计算任务；如果比值较小，说明该任务大部分时间在等待被调度或者因其他原因被阻塞。
         * @example `0.89`
         */
        ComputeTimeRatio: string;
    }[];
    /**
     * 某个Stage总的任务数。
     * @example `33`
     */
    TotalCount: number;
}
