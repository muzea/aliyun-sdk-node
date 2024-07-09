export interface DeleteChartRepositoryResponse {
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
     * @example `12589EF7-96E2-4554-AAD7-F7209E88CAD3`
     */
    RequestId: string;
}
