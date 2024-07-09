export interface SaveRTCStatsV2Response {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
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
     * @example `1647309061000`
     */
    TimeStamp: number;
    /**
     * 行数。
     * @example `1`
     */
    RowCount: number;
}
