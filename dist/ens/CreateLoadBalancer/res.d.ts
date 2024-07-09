export interface CreateLoadBalancerResponse {
    /**
     * 请求ID。
     * @example `1ECC937A-AE0E-4626-BE51-DED1D6D1C888`
     */
    RequestId: string;
    /**
     * 负载均衡实例的ID。
     * @example `lb-5s7crik3yo3bp03gqrbp5****`
     */
    LoadBalancerId: string;
    /**
     * 负载均衡实例的所属交换机的ID。
     * @example `vsw-5savh5ngxh8sbj14bu7n****`
     */
    VSwitchId: string;
    /**
     * 负载均衡实例名称。
     * @example `gcs-pre-websocket-****`
     */
    LoadBalancerName: string;
    /**
     * 网络ID。
     * @example `n-5sax03dh2eyagujgsn7z9****`
     */
    NetworkId: string;
}
