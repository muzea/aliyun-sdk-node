export interface CreateConnectionResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 数据源ID。
     * @example `123`
     */
    Data: number;
    /**
     * 请求ID。
     * @example `0bc141151593763****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
