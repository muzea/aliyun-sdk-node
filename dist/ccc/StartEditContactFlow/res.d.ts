export interface StartEditContactFlowResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
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
     * 数据，联系流草稿ID。
     * @example `b3114362-9062-46c7-82dc-ae55ac168b2e`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `BC2733CE-C470-564A-8C11-9DC02468823A`
     */
    RequestId: string;
}
