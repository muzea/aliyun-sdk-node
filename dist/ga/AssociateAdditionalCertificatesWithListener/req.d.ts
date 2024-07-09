export interface AssociateAdditionalCertificatesWithListenerRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId": string;
    /**
     * 监听实例ID。仅支持HTTPS的监听。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    "ListenerId": string;
    /**
     * 扩展证书列表。
     * 一次最多支持输入10个证书信息。
     */
    "Certificates": {
        /**
         * 证书ID，当前仅支持服务器证书。
         * 一次最多支持输入10个证书ID。
         * @example `6092**-cn-hangzhou`
         */
        Id: string;
        /**
         * 证书指定生效的域名。一个域名只能绑定一个扩展证书。
         * 一次最多支持输入10个域名。
         * @example `example.com`
         */
        Domain: string;
    }[];
}
