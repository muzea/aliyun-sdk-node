export interface SaveWebRTCStatsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `CF1C21B9-2D49-4B54-880F-FBE248C16903`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 生成记录时间，格式为Unix时间戳，单位毫秒。
     * @example `1555492246000`
     */
    TimeStamp: number;
    /**
     * 行数。
     * @example `1`
     */
    RowCount: number;
}
