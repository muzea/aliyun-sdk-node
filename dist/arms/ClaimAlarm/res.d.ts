export interface ClaimAlarmResponse {
    /**
     * 请求ID
     * @example `6A9AEA84-7186-4D8D-B498-4585C6A2****`
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
     * 操作是否成功：true：操作成功                                 false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
