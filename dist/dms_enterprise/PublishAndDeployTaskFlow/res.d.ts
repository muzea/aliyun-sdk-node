export interface PublishAndDeployTaskFlowResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `A7160423-2A83-592B-97E2-D8AE7B11C520`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `Unknown server error`
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
     * @example `61***`
     */
    DeployId: number;
}
