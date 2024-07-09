export interface ResetLoginPasswordResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `EB9C5722-51E2-4497-A573-575B0CA5CE0C`
     */
    RequestId: string;
}
