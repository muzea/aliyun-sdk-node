export interface ModifyMonitorGroupResponse {
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
     * @example `C85A2870-5DF4-4269-BC50-ECB5E4591A80`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
