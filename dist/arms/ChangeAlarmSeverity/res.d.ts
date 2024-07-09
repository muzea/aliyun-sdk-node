export interface ChangeAlarmSeverityResponse {
    /**
     * 请求ID。
     * @example `F7781D4A-2818-41E7-B7BB-79D809E9****`
     */
    RequestId: string;
    /**
     * 是否修改成功。
     * - `true`：删除成功。
     * - `false`：删除失败。
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
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 附加消息
     * @example `success`
     */
    Message: string;
}
