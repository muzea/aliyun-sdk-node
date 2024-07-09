export interface DescribeCloudBenchTasksRequest {
    /**
     * 任务的运行状态。取值：
     * - **SUCCESS**：成功。
     * - **IGNORED**：忽略。
     * - **RUNNING**：运行中。
     * - **EXCEPTION**：异常。
     * @example `SUCCESS`
     */
    "Status"?: string;
    /**
     * 压测任务类型。取值：
     * - **pressure test**（默认）：智能压测，将从源实例上捕获的流量，按照目标实例规格支持的极限速度，在目标实例上进行回放。
     * - **smart pressure test**：生成压测，通过分析和学习短时间内在源实例上捕获的流量，生成和原始流量的业务模型和流量分布基本一致的流量进行持续压测，减少从源实例采集数据的时间，降低存储成本和性能开销。
     * @example `pressure test`
     */
    "TaskType"?: string;
    /**
     * 查询任务开始时间，格式为Unix时间戳，单位为毫秒。
     * @example `1596177993000`
     */
    "StartTime"?: string;
    /**
     * 查询任务结束时间，格式为Unix时间戳，单位为毫秒。
     * >查询任务结束时间需晚于查询任务开始时间。
     * @example `1596177993001`
     */
    "EndTime"?: string;
    /**
     * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNo"?: string;
    /**
     * 每页最大记录数，取值大于0且不超过Integer数据类型的最大值，默认值为10。
     * @example `10`
     */
    "PageSize"?: string;
}
