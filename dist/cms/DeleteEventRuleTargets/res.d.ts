export interface DeleteEventRuleTargetsResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successfull`
     */
    Message: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `142989D9-CC52-54D0-928D-2C9B1D9F051C`
     */
    RequestId: string;
    /**
     * 是否成功，取值：
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    Success: boolean;
}
