export interface UpdateCatalogResponse {
    /**
     * 响应编码。
     * @example `OK`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `64E46067-49EA-5A91-A7B1-E812E18FC243`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
}
