export interface RestartCollectorResponse {
    /**
     * 返回结果，支持：
     * - true：重启成功
     * - false：重启失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `84B4038A-AF38-4BF4-9FAD-EA92A4FFF00A`
     */
    RequestId: string;
}
