export interface AddLogicTableRouteConfigResponse {
    /**
     * 请求ID。
     * @example `B43AD641-49C2-5299-9E06-1B37EC1B****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `can not find table, tableId : 11133`
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
