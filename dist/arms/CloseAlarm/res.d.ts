export interface CloseAlarmResponse {
    /**
     * 请求ID。
     * @example `46355DD8-FC56-40C5-BFC6-269DE4F9****`
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
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
