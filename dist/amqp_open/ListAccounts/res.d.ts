export interface ListAccountsResponse {
    /**
     * 请求ID。
     * @example `549A5A97-FE61-5A23-8126-3A1192*****`
     */
    RequestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: any;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
}
