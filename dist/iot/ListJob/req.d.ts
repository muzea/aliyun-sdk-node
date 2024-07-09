export interface ListJobRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 任务状态。取值范围：
     * - **INITIALIZING**：初始化。
     * - **WAITING**：待调度。
     * - **IN_PROGRESS**：执行中。
     * - **COMPLETED**：已完成。
     * - **CANCELLING**：取消中。
     * - **CANCELLED**：已取消。
     * - **REMOVING**：删除中。
     * - **TIMED_OUT**：已超时。
     * @example `IN_PROGRESS`
     */
    "Status"?: string;
    /**
     * 每页展示的任务个数。最大值为50。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage": number;
}
