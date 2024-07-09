export interface ReleaseApplicationResponse {
    /**
     * 错误消息
     * @example `资源不存在`
     */
    Message: string;
    /**
     * 请求ID
     * @example `BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `1`
     */
    Data: number;
    /**
     * HTTP返回code
     * @example `200`
     */
    Code: number;
}
