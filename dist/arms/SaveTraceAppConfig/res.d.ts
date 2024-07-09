export interface SaveTraceAppConfigResponse {
    /**
     * 操作是否成功。
     * @example `success`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `message`
     */
    Message: string;
    /**
     * 接口状态码：2XX：成功                                 3XX：重定向                                 4XX：请求错误                                 5XX：服务器错误
     * @example `200`
     */
    Code: number;
    /**
     * 查询是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
