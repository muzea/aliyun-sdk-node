export interface DescribeElasticsearchHealthResponse {
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0731F217-2C8A-4D42-8BCD-5C352866E3B7`
     */
    RequestId: string;
    /**
     * 返回的实例健康状态。
     * @example `GREEN`
     */
    Result: string;
}
