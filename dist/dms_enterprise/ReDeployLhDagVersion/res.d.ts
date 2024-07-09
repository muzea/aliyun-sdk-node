export interface ReDeployLhDagVersionResponse {
    /**
     * 请求ID。
     * @example `035C92E0-2EAD-50E5-A6DD-550F5F73D7CE`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `403`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 部署记录ID。
     * @example `15990`
     */
    DeployId: number;
}
