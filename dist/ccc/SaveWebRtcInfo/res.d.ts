export interface SaveWebRtcInfoResponse {
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
     * 信息入库时间，格式为Unix时间戳，单位毫秒。
     * @example `1647262108395`
     */
    TimeStamp: number;
    /**
     * 信息入库返回的行数，表示成功写入多少条记录，如果不为1，可能有异常，需要关注。
     * @example `1`
     */
    RowCount: number;
}
