export interface GetExperimentTaskResponse {
    /**
     * 节点场景任务详情
     */
    Activities: {
        /**
         * 节点任务结束时间
         * @example `1609430400000`
         */
        EndTime: number;
        /**
         * 节点任务开始时间
         * @example `1609430400000`
         */
        StartTime: number;
        /**
         * 用户确认状态：
         * - USER_CHECK_STATE_WAITING（等待用户确认）
         * - USER_CHECK_STATE_PASSED（用户确认通过）
         * - USER_CHECK_STATE_FAILED（用户确认失败）
         * @example `USER_CHECK_STATE_PASSED`
         */
        CheckState: string;
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
         * 节点任务状态：
         * - READY（就绪）
         * - RUNNING（正在执行）
         * - FINISHED（执行结束）
         * @example `READY`
         */
        State: string;
        /**
         * 演练节点ID
         * @example `1234567890123456789`
         */
        ActivityId: string;
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
         * 演练节点任务名称
         * @example `CPU满载`
         */
        ActivityName: string;
        /**
         * 故障演练任务实例ID
         * @example `1234567890123456789`
         */
        ExperimentTaskId: string;
        /**
         * 节点任务实例ID
         * @example `1234567890123456789`
         */
        TaskId: string;
    }[];
    /**
     * 故障演练任务实例ID
     * @example `1234567890123456789`
     */
    TaskId: string;
    /**
     * 请求ID
     * @example `0f7dd92f-4490-****-b8bd-****`
     */
    RequestId: string;
    /**
     * 故障演练名称
     * @example `测试演练`
     */
    ExperimentName: string;
    /**
     * 演练任务状态
     * @example `FINISHED`
     */
    State: string;
    /**
     * 故障演练任务ID
     * @example `1234567890123456789`
     */
    ExperimentId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 演练任务开始时间
     * @example `1609430400000`
     */
    StartTime: number;
    /**
     * 接口请求成功标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务执行结果
     * @example `SUCCESS`
     */
    Result: string;
    /**
     * 命名空间
     * @example `default`
     */
    Namespace: string;
}
