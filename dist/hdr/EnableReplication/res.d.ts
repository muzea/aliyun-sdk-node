export interface EnableReplicationResponse {
    /**
     * 接口状态或POP错误码。取值说明如下：2xx：成功。                                 3xx：重定向。                                 4xx：请求错误。                                 5xx：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息，若成功，则返回success
     * @example `successful`
     */
    Message: string;
    /**
     * 接口请求唯一标识符。
     * @example `E50FE4A6-C876-5D6F-8A09-93442308AA7B`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
