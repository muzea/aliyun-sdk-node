export interface UntagResourcesResponse {
    /**
     * 请求ID。
     * @example `F59597FC-CD05-536D-B75B-6F45B8CC8539`
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
     * 返回信息
     * @example `""`
     */
    Message: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
}
