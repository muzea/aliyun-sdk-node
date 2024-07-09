export interface DeleteLogicTableRouteConfigResponse {
    /**
     * 请求ID。
     * @example `A916A004-A88C-5B39-ABDB-DE808E80****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `MissingRouteKey`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `RouteKey is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
