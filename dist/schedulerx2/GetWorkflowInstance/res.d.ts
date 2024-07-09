export interface GetWorkflowInstanceResponse {
    /**
     * 请求唯一ID
     * @example `39090022-1F3B-4797-8518-6B61095F1AF0`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * API执行是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `workflowId=xxx is not existed`
     */
    Message: string;
    /**
     * 工作流实例详情封装在data中
     */
    Data: {
        /**
         * 工作流实例详情，包含了工作流的状态，开始结束时间，各个任务实例的状态及依赖关系
         */
        WfInstanceInfo: {
            /**
             * 工作流实例状态，取值如下：
             * - 1: 等待中
             * - 2: 准备中
             * - 3：运行中
             * - 4：成功
             * - 5：失败
             * @example `5`
             */
            Status: number;
            /**
             * 开始时间
             * @example `2023-01-03 18:00:01`
             */
            StartTime: string;
            /**
             * 结束时间
             * @example `2023-01-03 18:00:21`
             */
            EndTime: string;
            /**
             * 计划调度时间
             * @example `2023-01-03 18:00:00`
             */
            ScheduleTime: string;
            /**
             * 数据时间
             * @example `2023-01-03 18:00:00`
             */
            DataTime: string;
        };
        /**
         * 工作流实例的DAG信息，包含了节点和边
         */
        WfInstanceDag: {
            /**
             * 任务实例节点的数组
             */
            Nodes: {
                /**
                 * 任务实例ID
                 * @example `24058796`
                 */
                JobInstanceId: number;
                /**
                 * 任务ID
                 * @example `1472`
                 */
                JobId: number;
                /**
                 * 任务开始时间
                 * @example `2023-01-03 18:00:03`
                 */
                StartTime: string;
                /**
                 * 任务结束时间
                 * @example `2023-01-03 18:00:21`
                 */
                EndTime: string;
                /**
                 * 任务调度时间
                 * @example `2023-01-03 18:00:03`
                 */
                ScheduleTime: string;
                /**
                 * 任务数据时间
                 * @example `2023-01-03 18:00:00`
                 */
                DataTime: string;
                /**
                 * 任务实例的运行机器
                 * @example `10.163.0.101:34027`
                 */
                WorkAddr: string;
                /**
                 * 任务运行结果
                 * @example `code=200`
                 */
                Result: string;
                /**
                 * 任务失败重试次数
                 * @example `0`
                 */
                Attempt: number;
                /**
                 * 实例状态。包含以下几种状态：
                 * 1：等待
                 * 3：运行中
                 * 4：成功
                 * 5：失败
                 * 9：拒绝
                 * 对应枚举类： com.alibaba.schedulerx.common.domain.InstanceStatus
                 * @example `4`
                 */
                Status: number;
                /**
                 * 任务名称
                 * @example `TestJob`
                 */
                JobName: string;
            }[];
            /**
             * 任务实例依赖关系的数组
             */
            Edges: {
                /**
                 * 依赖关系的上游，0表示根节点
                 * @example `24058798`
                 */
                Source: number;
                /**
                 * 依赖关系的下游
                 * @example `24058796`
                 */
                Target: number;
            }[];
        };
    };
}
