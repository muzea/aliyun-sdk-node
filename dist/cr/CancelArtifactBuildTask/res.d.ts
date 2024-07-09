export interface CancelArtifactBuildTaskResponse {
    /**
     * 返回码
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
     * @example `C4C7DD0C-C9D6-437A-A7EE-121EFD70D002`
     */
    RequestId: string;
}
