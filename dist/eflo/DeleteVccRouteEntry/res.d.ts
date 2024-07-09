export interface DeleteVccRouteEntryResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `0901F411-28FA-5B9C-BAEE-7776463FF0DC`
     */
    RequestId: string;
    /**
     * 响应内容
     * @example `{}`
     */
    Content: any;
}
