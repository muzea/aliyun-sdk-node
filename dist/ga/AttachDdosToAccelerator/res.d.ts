export interface AttachDdosToAcceleratorResponse {
    /**
     * 绑定到全球加速实例的DDoS高防实例ID。
     * @example `ddoscoo-cn-zz11vq7j****`
     */
    DdosId: string;
    /**
     * 请求ID。
     * @example `DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6`
     */
    RequestId: string;
    /**
     * 绑定了DDoS高防实例的全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    GaId: string;
}
