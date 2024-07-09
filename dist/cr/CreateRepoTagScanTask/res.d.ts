export interface CreateRepoTagScanTaskResponse {
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
     * @example `BC648259-91A7-4502-BED3-EDF64361FA83`
     */
    RequestId: string;
}
