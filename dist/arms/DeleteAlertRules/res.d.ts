export interface DeleteAlertRulesResponse {
    /**
     * 删除报警规则是否成功。
     * - `true`：删除成功
     * - `false`：删除失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID。
     * @example `C21AB7CF-B7AF-410F-BD61-82D1567F****`
     */
    RequestId: string;
}
