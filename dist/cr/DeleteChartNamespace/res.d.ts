export interface DeleteChartNamespaceResponse {
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
     * @example `FEC62DF1-1394-467F-A69F-4BC1BA29F383`
     */
    RequestId: string;
}
