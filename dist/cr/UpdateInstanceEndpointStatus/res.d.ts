export interface UpdateInstanceEndpointStatusResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 调用是否成功，取值：
     * - `true`：调用成功
     * - `false`：调用失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `2FC14396-A16A-42BA-AAE4-BB94D956DF09`
     */
    RequestId: string;
}
