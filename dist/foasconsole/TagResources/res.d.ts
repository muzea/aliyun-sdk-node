export interface TagResourcesResponse {
    /**
     * 请求ID。
     * @example `67F33190-946B-1105-B6A1-E2DF0426DD51`
     */
    RequestId: string;
    /**
     * 是否成功，取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * tag请求ID。
     * @example `154FT`
     */
    TagResponseId: string;
    /**
     * 请求信息。
     * @example `""`
     */
    Message: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
}
