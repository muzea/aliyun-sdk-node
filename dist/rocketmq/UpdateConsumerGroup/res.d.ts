export interface UpdateConsumerGroupResponse {
    /**
     * 请求ID，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `C7F94090-3358-506A-97DC-34BC803C****`
     */
    requestId: string;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果。
     * @example `true`
     */
    data: boolean;
    /**
     * 错误码。
     * @example `InvalidDeliveryOrderType`
     */
    code: string;
    /**
     * 错误信息。
     * @example `Parameter deliveryOrderType is invalid.`
     */
    message: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    httpStatusCode: number;
    /**
     * 动态错误码。
     * @example `DeliveryOrderType`
     */
    dynamicCode: string;
    /**
     * 动态错误信息。
     * @example `deliveryOrderType`
     */
    dynamicMessage: string;
}
