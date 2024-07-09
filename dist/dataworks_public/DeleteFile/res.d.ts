export interface DeleteFileResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 如果文件已经提交过，那么DeleteFile接口会同时触发一个异步在调度系统删除的流程，需要用DeleteFile接口返回的DeploymentId继续调用GetDeployment轮询被触发的异步删除流程的状态。
     * 如果该字段为空，则说明文件已经删除完毕，无需继续轮询。
     * @example `1000000001`
     */
    DeploymentId: number;
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
}
