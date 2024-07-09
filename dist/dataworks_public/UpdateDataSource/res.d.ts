export interface UpdateDataSourceResponse {
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 是否成功更新数据源。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `0bc14115159376359****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
