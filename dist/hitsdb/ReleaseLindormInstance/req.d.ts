export interface ReleaseLindormInstanceRequest {
    /**
     * 实例ID，可调用[GetLindormInstanceList](~~426069~~)接口获取。
     * @example `ld-bp1z3506imz2f****`
     */
    "InstanceId": string;
    /**
     * 是否立即释放实例。默认false，实例数据会继续保留7天，然后删除；如果选择true，实例数据会被立刻删除。
     * @example `false`
     */
    "Immediately"?: boolean;
}
