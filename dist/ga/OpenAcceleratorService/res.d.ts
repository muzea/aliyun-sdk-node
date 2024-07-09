export interface OpenAcceleratorServiceResponse {
    /**
     * 当次请求的Request ID。
     * @example `B49B60F6-F6C8-49E5-B06B-E33E3A469A92`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `208257****`
     */
    OrderId: number;
    /**
     * 返回状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `True`
     */
    Success: string;
    /**
     * 返回响应描述。
     * @example `success`
     */
    Message: string;
}
