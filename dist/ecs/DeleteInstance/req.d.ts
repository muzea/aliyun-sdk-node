export interface DeleteInstanceRequest {
    /**
     * 实例ID。
     * @example `i-bp1g6zv0ce8oghu7****`
     */
    "InstanceId": string;
    /**
     * 是否强制释放**运行中**（`Running`）的实例。
     * - true：强制释放**运行中**（`Running`）的实例。强制释放相当于断电，实例内存以及存储中的临时数据都会被擦除，无法恢复。
     * - false：正常释放实例，此时实例必须处于**已停止**（`Stopped`）状态。
     * 默认值：false。
     * @example `false`
     */
    "Force"?: boolean;
    /**
     * 是否释放已到期的包年包月实例。
     * - true：释放。
     * - false：不释放。
     * 默认值：false。
     * @example `false`
     */
    "TerminateSubscription"?: boolean;
    /**
     * 是否只预检此次请求。取值范围：
     * - true：发送检查请求，不会释放实例。检查项包括是否填写了必需参数、请求格式、业务限制和 ECS 库存。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - false（默认）：发送正常请求，通过检查后直接删除实例。
     * @example `false`
     */
    "DryRun"?: boolean;
}
