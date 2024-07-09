export interface ListTaskRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 每页显示的记录数。默认值为10，最大值为50。
     * @example `10`
     */
    "Limit": number;
    /**
     * 任务ID。任务的全局唯一标识符。
     * > 如果传入Device参数，此参数不传。
     * @example `sGWotgRk***010001`
     */
    "JobId"?: string;
    /**
     * 下一页标识。首次查询可不传入值。如果存在下一页，服务会返回NextToken值，下次请求时传入。
     * NextToken值有效时间为1分钟。失效后，将返回对应的错误码。
     * @example `22dhgg***`
     */
    "NextToken"?: string;
    /**
     * 设备信息。更多信息，请参见下文“Device定义”。
     * > 如果传入JobId参数，此参数不传。
     * @example `{}`
     */
    "Device"?: any;
    /**
     * 任务作业的状态。取值范围：
     * - **QUEUED**：待调度。
     * - **SENT**：已调度。
     * - **IN_PROGRESS**：执行中。
     * - **FAILED**：失败。
     * - **REJECTED**：已拒绝。
     * - **TIMED_OUT**：已超时。
     * - **SUCCEEDED**：已成功。
     * - **CANCELLED**：已取消。
     * @example `QUEUED`
     */
    "Status"?: string;
}
