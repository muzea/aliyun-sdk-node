export interface DescribeInstancePolicyResponse {
    /**
     * GPU 3D 加速。
     * * off：关闭。
     * * on：打开。
     * * N/A：不适用，例如非 GPU 实例
     * @example `on`
     */
    OptimizeFor3d: string;
    /**
     * 当前查询命令的运行状态
     * * false：还未完成。
     * * true：已完成。
     * @example `true`
     */
    TaskFinished: boolean;
    /**
     * 视频无损模式
     * * off：关闭。
     * * on：打开。
     * * N/A：不适用，例如非 GPU 实例
     * @example `off`
     */
    VisualLossless: string;
    /**
     * 请求 id。
     * @example `XXX-XXX`
     */
    RequestId: string;
    /**
     * 当前查询命令的任务 id。
     * @example `t-xxx`
     */
    TaskId: string;
}
