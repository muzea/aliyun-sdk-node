export interface SetInstancePolicyRequest {
    /**
     * 实例 id。
     * @example `i-xxx`
     */
    "InstanceId": string;
    /**
     * > 仅对 GPU 实例有效，打开后可获得更好的画面质量。
     * 视频无损模式
     * * off（默认）：关闭
     * * on：打开
     * @example `on`
     */
    "VisualLossless"?: string;
    /**
     * > 仅对 GPU 实例有效，打开后可获得更小的桌面延迟。
     * GPU 加速
     * * off（默认）：关闭
     * * on：打开
     * @example `on`
     */
    "OptimizeFor3d"?: string;
    /**
     * 异步模式调用：
     * * false（默认）：设置完成后，api 才会返回
     * * true：api **立即**返回
     *     * 当 `TaskId` 为空：设置动作在后台异步执行。调用方需使用**返回值**中的 TaskId，继续调用 DescribeInstancePolicy 来获得设置运作的结果。
     *     * 当 `TaskId` 不为空：获得设置动作的结果。
     * @example `true`
     */
    "AsyncMode"?: boolean;
}
