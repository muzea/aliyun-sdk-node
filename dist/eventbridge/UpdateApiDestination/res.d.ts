export interface UpdateApiDestinationResponse {
    /**
     * 请求ID
     * @example `382E6272-8E9C-5681-AC96-A8AF0BFAC1A5`
     */
    RequestId: string;
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * API端点名称。
     * @example `api-destination-name`
     */
    ApiDestinationName: string;
}
