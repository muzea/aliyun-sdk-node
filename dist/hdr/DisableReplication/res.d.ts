export interface DisableReplicationResponse {
    /**
     * 接口状态或POP错误码。取值说明如下：2xx：成功。                                 3xx：重定向。                                 4xx：请求错误。                                 5xx：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求id
     * @example `B7F69F73-51C4-5D3F-B2BE-E1BD99022C15`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
