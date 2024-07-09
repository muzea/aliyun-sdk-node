export interface DescribeSQLPlanTaskResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    TaskList: {
        /**
         * 带数据源的任务的扫描数据耗时。单位：ms。
         * @example `0`
         */
        ScanCost: number;
        /**
         * 任务的输出数据量。单位：Byte。
         * @example `945`
         */
        OutputSize: number;
        /**
         * 任务的输入数据量。单位：Byte。
         * @example `3763`
         */
        InputSize: number;
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
         * 任务在某个节点的算子总耗时，是个多线程累加值，可以用于判断计算是否存在长尾。单位：ms。
         * @example `3`
         */
        OperatorCost: number;
        /**
         * 任务的输出数据行数。
         * @example `105`
         */
        OutputRows: number;
        /**
         * 带数据源的任务的扫描数据量。单位：Byte。
         * @example `0`
         */
        ScanSize: number;
        /**
         * 任务从创建到结束的时间差。单位：ms。
         * @example `10`
         */
        ElapsedTime: number;
        /**
         * 带数据源的任务的扫描数据行数。
         * @example `0`
         */
        ScanRows: number;
        /**
         * 任务在某个节点的峰值内存。单位：Byte。
         * @example `898576`
         */
        PeakMemory: number;
        /**
         * 任务ID。
         * @example `198877623`
         */
        TaskId: number;
        /**
         * 任务的输入数据行数。
         * @example `105`
         */
        InputRows: number;
    }[];
}
