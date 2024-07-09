export interface CreateProductOrdersResponse {
    /**
     * 请求 ID
     * @example `ksdjf-jksd-*****slkdjf`
     */
    RequestId: string;
    /**
     * 购买订单ID。
     * @example `210292536260646`
     */
    OrderId: string;
    /**
     * 购买返回消息。
     * @example `正常`
     */
    Message: string;
    /**
     * 产品购买请求ID。
     * @example `3ed6a882-0d85-4dd8-ad36-cd8d74ab9fdb`
     */
    BuyProductRequestId: string;
}
