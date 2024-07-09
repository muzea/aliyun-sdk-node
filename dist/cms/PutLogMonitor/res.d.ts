export interface PutLogMonitorResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。结果如下：
     * - 当操作成功时，返回`successful`。
     * - 当操作失败时，返回错误信息，例如：`alias of aggreate must be set value.`。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `91561287-0802-5F9C-9BDE-404C50D41B06`
     */
    RequestId: string;
    /**
     * 日志监控ID。
     * @example `16****`
     */
    LogId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
