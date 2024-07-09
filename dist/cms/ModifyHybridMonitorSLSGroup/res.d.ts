export interface ModifyHybridMonitorSLSGroupResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `NotFound.SLSGroup`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `66683237-7126-50F8-BBF8-D67ACC919A17`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
}
