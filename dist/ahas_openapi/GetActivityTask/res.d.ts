export interface GetActivityTaskResponse {
    /**
     * 机器执行信息
     */
    Hosts: {
        /**
         * 节点机器IP
         * @example `192.168.0.1`
         */
        HostIp: string;
        /**
         * 节点机器任务结束时间
         * @example `1609430400000`
         */
        EndTime: number;
        /**
         * 节点机器任务开始时间
         * @example `1609430400000`
         */
        StartTime: number;
        /**
         * 小程序返回值，页面以Pretty JSON String形式展示
         * @example `无`
         */
        Data: string;
        /**
         * 节点机器执行错误信息
         * @example `无`
         */
        ErrorMessage: string;
        /**
         * 节点机器任务执行ID
         * @example `3456****`
         */
        ExpId: string;
        /**
         * 节点机器任务执行结果
         * @example `SUCCESS`
         */
        Result: string;
        /**
         * 节点机器任务状态
         * @example `FINISHED`
         */
        State: string;
        /**
         * 节点任务实例ID
         * @example `1234567890123456789`
         */
        TaskId: string;
    }[];
    /**
     * 节点所属阶段：
     * - PREPARE（准备阶段）
     * - ATTACK（注入阶段）
     * - CHECK（检查阶段）
     * - RECOVER（恢复阶段）
     * @example `ATTACK`
     */
    Phase: string;
    /**
     * 节点任务结束时间
     * @example `1609430400000`
     */
    EndTime: number;
    /**
     * 请求ID
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 节点任务实例名称
     * @example `CPU满载`
     */
    ActivityName: string;
    /**
     * 节点任务状态：
     * - READY（就绪）
     * - RUNNING（正在执行）
     * - FINISHED（执行结束）
     * @example `FINISHED`
     */
    State: string;
    /**
     * 节点任务实例ID
     * @example `1234567890123456789`
     */
    ActivityId: string;
    /**
     * 故障演练任务实例ID
     * @example `1234567890123456789`
     */
    ExperimentTaskId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 节点任务开始时间
     * @example `1609430400000`
     */
    StartTime: number;
    /**
     * 节点任务执行结果：
     * - SUCCESS（成功）
     * - FAILED（失败）
     * - REJECTED（任务调过）
     * - ERROR（任务异常中断）
     * - STOPPED（任务被终止）
     * - SOPPED_FAILED（停止失败）
     * @example `SUCCESS`
     */
    RunResult: string;
    /**
     * 接口请求成功标识
     * @example `true`
     */
    Success: boolean;
}
