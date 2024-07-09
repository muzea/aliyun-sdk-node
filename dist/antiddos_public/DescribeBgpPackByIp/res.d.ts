export interface DescribeBgpPackByIpResponse {
    /**
     * 本次请求的ID。
     * @example `E46A08E4-A1CD-5BE9-B580-C4D6E9BC5484`
     */
    RequestId: string;
    /**
     * 本次请求的HTTP状态码。
     * 关于状态码的更多信息，请参见[公共参数](~~118841~~)。
     * @example `200`
     */
    Code: number;
    /**
     * 本次请求是否调用成功。取值：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 公网IP资产绑定的DDoS原生防护实例的配置。
     */
    DdosbgpInfo: {
        /**
         * 公网IP资产的IP地址。
         * @example `118.31.XX.XX`
         */
        Ip: string;
        /**
         * DDoS原生防护实例的到期时间。使用时间戳表示，单位：毫秒。
         * @example `1640448000000`
         */
        ExpireTime: number;
        /**
         * DDoS原生防护实例的弹性防护阈值。单位：Gbps。
         * @example `301`
         */
        ElasticThreshold: number;
        /**
         * DDoS原生防护实例的基础防护阈值。单位：Gbps。
         * @example `20`
         */
        BaseThreshold: number;
        /**
         * DDoS原生防护实例的ID。
         * @example `ddosbgp-cn-n6w1r7nz****`
         */
        DdosbgpInstanceId: string;
    };
}
