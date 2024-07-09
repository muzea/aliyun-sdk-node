export interface CreateMonitorGroupResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `83C89BA6-ABD4-4398-A175-83E86C47A001`
     */
    RequestId: string;
    /**
     * 应用分组ID。
     * @example `1234567`
     */
    GroupId: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
