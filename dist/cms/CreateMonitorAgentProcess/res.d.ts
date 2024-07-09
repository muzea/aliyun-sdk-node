export interface CreateMonitorAgentProcessResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `971CC023-5A96-452A-BB7C-2483F948BCFD`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 进程ID。
     * @example `123456`
     */
    Id: number;
}
