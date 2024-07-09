export interface BlockAlarmNotificationResponse {
    /**
     * 请求ID。
     * @example `626037F5-FDEB-45B0-804C-B3C92797****`
     */
    RequestId: string;
    /**
     * 是否操作成功。
     * - `true`：操作成功。
     * - `false`：操作失败。
     * @example `true`
     */
    Result: boolean;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
