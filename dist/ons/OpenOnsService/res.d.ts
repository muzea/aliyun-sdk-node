export interface OpenOnsServiceResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `8C5B4603-8977-4513-AB60-9C3E2F88****`
     */
    RequestId: string;
    /**
     * 订单ID。
     * @example `2068689****0272`
     */
    OrderId: string;
}
