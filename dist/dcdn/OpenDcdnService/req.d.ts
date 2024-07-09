export interface OpenDcdnServiceRequest {
    /**
     * 开通服务的计费类型。取值：
     * - **PayByTraffic**：按流量计费
     * - **PayByBandwidth**：按带宽峰值
     * @example `PayByTraffic`
     */
    "BillType": string;
    /**
     * 开通服务的Websocket计费类型。取值：
     * - **websockettraffic**：按流量计费
     * - **websocketbps**：按带宽峰值
     * @example `websockettraffic`
     */
    "WebsocketBillType": string;
}
