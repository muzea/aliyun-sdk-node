export interface UpdateConfigItemsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8E7Y5B39-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    Params: string[];
}
